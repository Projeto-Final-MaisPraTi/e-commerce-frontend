import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";

const base64ToBlob = (base64Data, contentType) => {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};

const extractBase64Data = (base64String) => {
  console.log(base64String);
  const [prefix, base64Data] = base64String.split(",");
  const contentType = prefix.match(/data:(.*);base64/)[1]; // Extraímos o tipo de conteúdo (ex: "image/png")
  return { base64Data, contentType };
};

export const uploadImages = async (images) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.error(
      "Usuário não está autenticado. Por favor, faça login antes de tentar fazer o upload.",
    );
    return; // Não prosseguir com o upload se o usuário não estiver autenticado
  } else {
    console.error("Usuário está autenticado.");
  }
  const uploadPromises = images.map((image, index) => {
    return new Promise((resolve, reject) => {
      const { base64Data, contentType } = extractBase64Data(image);
      const blob = base64ToBlob(base64Data, contentType);

      const storageRef = ref(
        storage,
        `images/image_${index}_${Date.now()}.${contentType.split("/")[1]}`,
      ); // Define o nome da imagem no Firebase Storage

      const uploadTask = uploadBytesResumable(storageRef, blob); // Faz o upload do Blob

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Progresso do upload: " + progress + "%");
        },
        (error) => {
          console.error("Erro ao fazer upload:", error);
          reject(error);
        },
        () => {
          // Obtenha a URL de download quando o upload for concluído
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        },
      );
    });
  });

  // Espera até que todos os uploads estejam concluídos e retorna as URLs
  return Promise.all(uploadPromises);
};


// UMA UNICA IMAGEM
export const uploadImage = async (image) => {
  // Extraia os dados da imagem Base64
  const { base64Data, contentType } = extractBase64Data(image);

  // Converta os dados em Blob
  const blob = base64ToBlob(base64Data, contentType);

  // Crie uma referência no Firebase Storage
  const fileName = `images/${Date.now()}.jpg`; // Altere a extensão conforme necessário
  const storageRef = ref(storage, fileName);

  try {
    // Faça o upload do Blob
    await uploadBytes(storageRef, blob);
    // Obtenha a URL de download da imagem
    const downloadURL = await getDownloadURL(storageRef);
    console.log("Imagem enviada com sucesso! URL:", downloadURL);
    return downloadURL; // Retorne a URL para uso posterior
  } catch (error) {
    console.error("Erro ao fazer o upload da imagem:", error);
  }
};
