import { useState, useEffect } from "react";
import axios from "axios";
/* eslint-disable import/no-unresolved */
/* eslint-enable import/no-unresolved */
import Card from "@components/Cards/Card";
import "./style.css";

export default function Gallery() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=878`
      )
      .then(({ data }) => {
        setMovies(
          data.results.filter((movie) => {
            return !movie.genre_ids.includes(27);
          })
        );
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="gallery">
      {movies.map((movie) => (
        <Card key={movie.id} title={movie.title} poster={movie.poster_path} />
      ))}
    </div>
  );
}
