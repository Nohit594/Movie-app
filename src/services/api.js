const API_KEY = "PUT YOUR API KEY HERE";      // GO TO WEBSITE themoviedb.org  
const BASE_URL = "https://api.themoviedb.org/3";  //NOTE : use vpn to connect also you can install VeePN chrome Extension

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
