export const createVideoURl = (id = ''): string => {
  return `https://www.youtube.com/embed/${id}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`;
};
