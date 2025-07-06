import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const swapiService = {
  getPeople: (params) => api.get("/people", { params }),
  getMovies: (params) => api.get("/movies", { params }),
  getMovieWithCharacters: (id) => api.get(`/movies/${id}/with_characters`),
  getPersonWithMovies: (id) => api.get(`/people/${id}/with_movies`),
  getSearchStats: (params) => api.get("/search_stats", { params }),
};

export default swapiService;
