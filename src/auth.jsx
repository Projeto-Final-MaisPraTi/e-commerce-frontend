import jwt_decode from "jwt-decode";


export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return localStorage.getItem("jwt");
  } else {
    return false;
  }
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
  }
};


export const getDecodedTokenRole = () => {
  try {
      const token = localStorage.getItem("jwt");
      if (!token) {
          return ;
      }
      const decoded = jwt_decode(token);
      return decoded.role === 'ADMIN';
  } catch (error) {
      console.error("Erro ao decodificar o token:", error.message);
      return null;
  }
};