import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState([]);
  const [color, setColor] = useState("Preto");
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [cover, setCover] = useState();

  const setValues = (value, type) => {
    if (type == "name") {
      setName(value);
    } else if (type == "description") {
      setDescription(value);
    } else if (type == "category") {
      setCategory(value);
    } else if (type == "quantity") {
      setQuantity(value);
    } else if (type == "price") {
      setPrice(value);
    } else if (type == "color") {
      setColor(value);
    } else if (type == "cover") {
      setCover(value);
    } else if (type == "img") {
      setImage([value]);
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

  image
    ? ""
    : setImage("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  name ? "" : setName("Title");
  price ? "" : setPrice("999,99");
  return (
    <RegisterContext.Provider value={{ setValues, name, price, image, cover, data }}>
      {children}
    </RegisterContext.Provider>
  );
};
