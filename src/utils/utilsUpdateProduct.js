import { handleUpload, handleOneUpload } from "../services/ProductSubmission";

export const createUpdateProdutoData = async (produto, imageFiles, setCover) => {
  const data = {};
  data["id"] = produto.id;
  if (produto.name.edit) {
    data["name"] = produto.name.value;
  }
  if (produto.price.edit) {
    data["price"] = produto.price.value;
  }
  if (produto.color.edit) {
    data["color"] = produto.color.value;
  }
  if (produto.description.edit) {
    data["description"] = produto.description.value;
  }
  if (produto.stock.edit) {
    data["stock"] = produto.stock.value;
  }
  if (produto.category.edit) {
    data["category"] = produto.category.value;
  }
  if (produto.images.edit && newImages.length > 0) {
    console.log(newImages);
    console.log(imageFiles);
    const urlImages = await handleUpload(imageFiles);
    data["images"] = urlImages;
  }
  if (produto.cover.edit) {
    if (produto.cover.value && produto.cover.value instanceof File) {
      const urlCover = await handleOneUpload(produto.cover.value);
      setCover(urlCover);
      data["cover"] = urlCover;
    }
  }
  return data;
};
