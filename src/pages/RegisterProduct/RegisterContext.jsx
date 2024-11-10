import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState('');
  const [image, setImage] = useState([]);
  const [color, setColor] = useState("Preto");
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [cover, setCover] = useState('');

  const setValues = (type, value) => {
    const setters = {
      name: setName,
      description: setDescription,
      category: setCategory,
      quantity: setQuantity,
      price: setPrice,
      color: setColor,
      cover: setCover,
      img: setImage,
    };

    if (setters[type]) {
      setters[type](value);
    }
  };

  const data = {
    name: name,
    price: price,
    images: image,
    color: color,
    description: description,
    category: category,
    quantity: quantity,
    cover: cover,
  };

  name ? "" : setName("Title");
  return (
    <RegisterContext.Provider value={{ setValues, name, price, image, cover, data }}>
      {children}
    </RegisterContext.Provider>
  );
};
