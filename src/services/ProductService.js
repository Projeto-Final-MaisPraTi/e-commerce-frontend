import axios from "axios";

const API_URL = "http://localhost:8080/api/product"; // URL para criar produtos

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Retorna os dados do produto cadastrado
  } catch (error) {
    console.error("Error ao criar produto:", error);
    throw error; // Repassa o erro
  }
};

export const updateProduct = async (productData) => {
  try {
    const response = await axios.put(API_URL + '/update', productData,
      {
      headers: {
        "Content-Type": "application/json",
      }}
    );
    return response.data; // Retorna os dados do produto atualizados
  } catch (error) {
    console.error("Error ao atualizar produto:", error);
    throw error; // Repassa o erro
  }
};

export const getUpdateProduct = async (id) => {
  try {
    const response = await axios.get(API_URL + '/' + id + '/update', {
        headers: {
        'Content-Type': 'application/json'
        }
    });
    return response.data;
} catch (error) {
    console.error('Error ao procurar produto:', error);
    throw error; // Repassa o erro
}
}

export const deleteProductById = async (id) => {
  try {
      const response = await axios.delete(API_URL + '/' + id, {
          headers: {
          'Content-Type': 'application/json'
          }
      });
      return response.data;
  } catch (error) {
      console.error('Error ao deletar produto:', error);
      throw error; // Repassa o erro
  }
};

export const findProductByName = async (name) => {
  try {
    const response = await axios.get(API_URL + "/search?name=" + name, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error ao procurar produto:", error);
    throw error; // Repassa o erro
  }
};

export const findProductById = async (id) => {
    try {
        const response = await axios.get(API_URL + '/' + id, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error ao procurar produto:', error);
        throw error; // Repassa o erro
    }
};

