import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/itemcart`;

export const addItemToCart = async (itemCartData) => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) {
      throw new Error("Usuário não autenticado. Faça login para adicionar itens ao carrinho.");
    }

    const response = await axios.post(API_URL, itemCartData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar item ao carrinho:", error);
    throw error;
  }
};