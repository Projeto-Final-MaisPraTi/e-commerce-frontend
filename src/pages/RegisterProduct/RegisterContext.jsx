import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const setValues = (value, type) => {
    if (type == "name") {
      setName(value);
    } else if (type == "price") {
      setPrice(value);
    } else if (type == "img") {
      setImage(value);
    }
  };

  image
    ? ""
    : setImage("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  name ? "" : setName("Title");
  price ? "" : setPrice("999,99");
  return (
    <RegisterContext.Provider value={{ setValues, name, price, image }}>
      {children}
    </RegisterContext.Provider>
  );
};
