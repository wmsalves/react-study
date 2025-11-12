import React from "react";
import styles from "./MovieList.module.css";
import CardMovie from "../CardMovie";
import { Movie } from "../../types";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
