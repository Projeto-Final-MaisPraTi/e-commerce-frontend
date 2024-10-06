import axios from 'axios';

const API_URL = 'http://localhost:8080/api/product'; // URL para criar produtos

export const createProduct = async (productData) => {
    try {
        const response = await axios.post(API_URL, productData, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data; // Retorna os dados do produto cadastrado
    } catch (error) {
        console.error('Error creating product:', error);
        throw error; // Repassa o erro
    }
};