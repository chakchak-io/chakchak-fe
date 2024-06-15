export const createImageURL = (file: File) => {
  return URL.createObjectURL(file as Blob);
};
