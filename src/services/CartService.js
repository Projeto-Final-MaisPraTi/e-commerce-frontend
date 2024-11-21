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

export const getAllCartItems = async () => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) {
      throw new Error("Usuário não autenticado. Faça login para adicionar itens ao carrinho.");
    }

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os todos os produtos:", error);
    return null;
  }
};
