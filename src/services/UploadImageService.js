const base64ToBlob = (base64Data, contentType) => {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};

const extractBase64Data = (base64String) => {
  console.log(base64String);
  const [prefix, base64Data] = base64String.split(",");
  const contentType = prefix.match(/data:(.*);base64/)[1]; // Extraímos o tipo de conteúdo (ex: "image/png")
  return { base64Data, contentType };
};