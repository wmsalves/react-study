import { useEffect, useState } from "react";
import { Movie } from "../types";

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch };
};

export default useFilterMovies;
