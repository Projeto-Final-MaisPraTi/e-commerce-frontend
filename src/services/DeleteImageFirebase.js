import { ref, deleteObject } from "firebase/storage";
import { storage } from "./firebase";

export const deleteImagesFirebase = async (imagePath) => {

    // Função para deletar a imagem
    // Cria uma referência para o arquivo que deseja deletar
    const imageRef = ref(storage, imagePath);

    // Chama o método delete
    deleteObject(imageRef)
        .then(() => {
            console.log("Imagem deletada com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao deletar a imagem:", error);
        });
};