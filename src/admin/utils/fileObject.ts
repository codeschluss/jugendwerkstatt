export const fileToBase64 = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = ((reader?.result || "") as string)
        .replace("data:", "")
        .replace(/^.+,/, "");

      resolve(base64String as string);
    };

    reader.readAsDataURL(file);
    reader.onerror = reject;
  });

export const fileObject = async (file: File) => {
  const base64 = await fileToBase64(file);

  return {
    name: file?.name,
    mimeType: file?.type,
    base64,
  };
};
