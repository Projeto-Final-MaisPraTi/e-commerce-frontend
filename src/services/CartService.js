import axios from "axios";

const API_URL = "http://localhost:8080/api/itemcart";

export const addItemToCart = async (itemCartData) => {
  try {
    const response = await axios.post(API_URL, itemCartData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("jwt"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar item ao carrinho:", error);
    throw error;
  }
};


export const getAllCartItems = async () => {
  try {
    const response = await axios.get(API_URL,{
      headers:{
        "Authorization":localStorage.getItem("jwt"),
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os todos os produtos:", error);
    return null;
  }
};



