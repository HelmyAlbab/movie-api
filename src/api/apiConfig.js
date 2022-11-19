const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "32fcb9ac66be58886df1d808a338733a",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
