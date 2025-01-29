import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";
const MOVIE_IDS = [
  "tt0111161", // The Shawshank Redemption
  "tt0068646", // The Godfather
  "tt0071562", // The Godfather: Part II
  "tt0468569", // The Dark Knight
  "tt0050083", // 12 Angry Men
  "tt0108052", // Schindler's List
  "tt0167260", // The Lord of the Rings: The Return of the King
  "tt0110912", // Pulp Fiction
];

export const getMoviesData = async () => {
  try {
    const movies = await Promise.all(
      MOVIE_IDS.map((id) =>
        axios.get(BASE_URL, { params: { i: id, apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY } })
      )
    );
    return movies.map((response) => response.data);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMovieById = async ({ movieId }) => {
    try {
      const response = await fetch(`${BASE_URL}?i=${movieId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
      const movieData = await response.json();
      return movieData;
    } catch (error) {
      console.error("Failed to fetch movie:", error.message);
      return null; 
    }
};
