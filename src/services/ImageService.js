import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/images`;

export const deleteImageByUrl = async (url) => {
  try {
    const response = await axios.delete(API_URL + "/delete-image", {
      data: { imageUrl: url },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error ao deletar imagem:", error);
    throw error; // Repassa o erro
  }
};

export const addCoverImage = async (id, url) => {
  try {
    const response = await axios.post(
      API_URL + "/add-cover",
      {
        idProduct: id,
        imageUrl: url,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error ao adicionar imagem de capa:", error);
    throw error; // Repassa o erro
  }
};
