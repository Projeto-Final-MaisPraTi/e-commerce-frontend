import { uploadImages } from "./UploadImageService";
import { createProduct } from "./ProductService";
import { supabase } from "./supabaseClient";

const supabaseUrl = 'https://pabcuykqmeeindoyvkok.supabase.co';

export const submitProduct = async (productData, images, setProgressBar, setProgressInsertDB) => {
  let data = {
    nome: productData.name,
    descricao: productData.description,
    categoria: productData.category,
    estoque: productData.quantity,
    nota: 0,
    preco: productData.price.replace(",", "."),
    cor: productData.color,
  };
  let completeProductData;
  try {
    setProgressBar(true);
    const imageUrls = await handleUpload(images);
    // const imageUrls = await uploadImages(images); // Faz o upload das imagens
    completeProductData = { ...data, images: imageUrls }; // Organiza os dados
    setProgressBar(null);
  } catch (error) {
    setProgressBar(null);
    console.error("Error upload images:", error);
    throw error; // Repassa o erro
  }
  try {
    setProgressInsertDB(true);
    const result = await createProduct(completeProductData); // Faz o POST do produto
    setProgressInsertDB(false);
    return result; // Retorna os dados do produto cadastrado
  } catch (error) {
    setProgressInsertDB(false);
    console.error("Error submmit product in server:", error);
    throw error; // Repassa o erro
  }
};


export const handleUpload = async (files) => {
  if (files.length === 0) return;

  const urls = [];

  // Bucket no Supabase
  // const supabaseUrl = 'https://pabcuykqmeeindoyvkok.supabase.co';

  for (const file of files) {
    const partes = file.name.split('.');
    partes[0] += Date.now();
    let name = partes.join('.');
    const { data, error } = await supabase.storage
      .from('ecomerce')
      .upload(`public/productImages/${name}`, file);

    if (error) {
      console.error('Upload error:', error);
      continue; // Ignora o arquivo em caso de erro
    }

    const url = `${supabaseUrl}/storage/v1/object/public/ecomerce/${data.path}`;
    urls.push(url);
  }

  return (urls);
};

export const handleOneUpload = async (file) => {
  if (!file) return;

  const partes = file.name.split('.');
  partes[0] += Date.now();
  let name = partes.join('.');

  const { data, error } = await supabase.storage
    .from('ecomerce')
    .upload(`public/productImages/${name}`, file);

  if (error) {
    console.error('Upload error:', error);
    return;
  }
  const url = `${supabaseUrl}/storage/v1/object/public/ecomerce/${data.path}`;

  return(url);
};
