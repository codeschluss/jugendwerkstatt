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

export const base64ImageToFile = (
  str: string,
  type: string,
  fileName: string
) => {
  // decode base64
  const imageContent = atob(str);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  const buffer = new ArrayBuffer(imageContent.length);
  const view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for (var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  const blob = new Blob([buffer], { type });
  const file = new File([blob], fileName, { type });

  return file;
};

export const fileObject = async (file: File) => {
  const base64 = await fileToBase64(file);

  return {
    name: file?.name,
    mimeType: file?.type,
    base64,
  };
};
