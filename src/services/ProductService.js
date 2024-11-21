import axios from "axios";

const token = localStorage.getItem("jwt");
const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/product`; // URL para criar produtos
// const API_URL = "http://192.168.4.24:8080/api/product";
// rota para criar os produtos

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

// rota para atualizar o produto com os novos dados

export const updateProduct = async (productData) => {
  try {
    const response = await axios.put(API_URL + "/update", productData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Retorna os dados do produto atualizados
  } catch (error) {
    console.error("Error ao atualizar produto:", error);
    throw error; // Repassa o erro
  }
};

// pega o produto com as informações para preencher o input da pagina de atualização de produtos

export const getUpdateProduct = async (id) => {
  try {
    const response = await axios.get(API_URL + "/" + id + "/update", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error ao procurar produto update:", error);
    throw error; // Repassa o erro
  }
};

// deleta o produto pelo id

export const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(API_URL + "/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error ao deletar produto:", error);
    throw error; // Repassa o erro
  }
};

// retorna uma lista de produtos que buscada pelo nome

export const findProductByName = async (name) => {
  try {
    const response = await axios.get(API_URL + "/search?name=" + name, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error ao procurar produto por nome:", error);
    throw error; // Repassa o erro
  }
};

// pegar produtos pelo id, retorna só o simples

export const findProductById = async (id) => {
  try {
    const response = await axios.get(API_URL + "/" + id, {
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

// procurar por uma categoria

export const findProductByCategory = async (category) => {
  try {
    const response = await axios.get(API_URL + "/search?category=" + category, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error ao procurar categoria:", error);
    throw error; // Repassa o erro
  }
};

// pegar o produtos com todos os detalhes pelo id

export const getProductDetails = async (id) => {
  try {
    const response = await axios.get(API_URL + "/" + id + "/details", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error ao procurar detalhes do produto:", error);
    throw error; // Repassa o erro
  }
};

/*
  procurar o produto por fitros, o objeto pode ter um unico filtro ou todos os filtros
  Ex:
  data = {
    nome:
    categoria:
    minPrice:
    maxPrice:
    color:
  }
*/

export const getFilteredProducts = async (filters, page = 0, size = 10) => {
  try {
    const response = await axios.get(API_URL + `/search?`, {
      params: {
        ...filters,
        page: page,
        size: size,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos por filtro:", error);
  }
};

// Função para buscar produtos de flash sales com paginação
// Retorna uma paginação
export const getFlashSalesProducts = async (page = 0, size = 10, sort = "name,asc") => {
  try {
    const response = await axios.get(API_URL + `/flashsales?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os produtos em venda relampago:", error);
    return null;
  }
};

export const getBestSellersProducts = async (page = 0, size = 10, sort = "name,asc") => {
  try {
    const response = await axios.get(API_URL + `/bestsellers?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os produtos mais vendidos:", error);
    return null;
  }
};

export const getAllProducts = async (page = 0, size = 10, sort = "name,asc") => {
  try {
    const response = await axios.get(API_URL + `?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os todos os produtos:", error);
    return null;
  }
};
