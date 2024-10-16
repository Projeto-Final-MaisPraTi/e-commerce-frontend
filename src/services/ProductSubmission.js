import { uploadImages } from "./UploadImageService";
import { createProduct } from "./ProductService";

export const submitProduct = async (productData, images, setProgressBar, setProgressInsertDB) => {
  let data = {
    nome: productData.name,
    descricao: productData.description,
    categoria: productData.category,
    estoque: productData.quantity,
    nota: 0,
    preco: productData.price.replace(",", "."),
    cor: productData.color,
  };
  let completeProductData;
  try {
    setProgressBar(true);
    const imageUrls = await uploadImages(images); // Faz o upload das imagens
    completeProductData = { ...data, images: imageUrls }; // Organiza os dados
    setProgressBar(null);
  } catch (error) {
    setProgressBar(null);
    console.error("Error upload images:", error);
    throw error; // Repassa o erro
  }
  try {
    setProgressInsertDB(true);
    const result = await createProduct(completeProductData); // Faz o POST do produto
    setProgressInsertDB(false);
    return result; // Retorna os dados do produto cadastrado
  } catch (error) {
    setProgressInsertDB(false);
    console.error("Error submmit product in server:", error);
    throw error; // Repassa o erro
  }
};
