import { uploadImages } from './UploadImageService';
import { createProduct } from './ProductService';

export const submitProduct = async (productData, images) => {
    
    let data = {
        nome: productData.name,
        descricao: productData.description,
        categoria: productData.category,
        estoque: productData.quantity,
        nota: 0,
        preco: productData.price.replace(",", "."),
        cor: productData.color
    }
    let completeProductData;
    try {
        const imageUrls = await uploadImages(images); // Faz o upload das imagens
        completeProductData = { ...data, images: imageUrls }; // Organiza os dados
    } catch (error) {
        console.error('Error upload images:', error);
        throw error; // Repassa o erro
    }
    try {
        const result = await createProduct(completeProductData); // Faz o POST do produto
        return result; // Retorna os dados do produto cadastrado
    } catch (error) {
        console.error('Error subimmit product in server:', error);
        throw error; // Repassa o erro
    }
   
};