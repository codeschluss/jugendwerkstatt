import { encode } from 'base64-arraybuffer';

export const fileToBase64 = async (file: File) => ({
  name: file?.name,
  mimeType: file?.type,
  ...(!!file && {
    base64: encode(await file.arrayBuffer()),
  }),
});
