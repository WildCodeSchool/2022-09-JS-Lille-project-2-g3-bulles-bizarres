import Card from "@components/Cards/Card/Index";
import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import SearchButton from "@components/SearchButton";
import axios from "axios";
import React, { useEffect } from "react";

import "./App.css";

function App() {
  const [movies, setMovies] = React.useState([]);
  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }&language=en-US&page=1`
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
    <div className="App">
      <div className="layout">
        <div className="header">
          <Logo />
          <Titre />
        </div>
        <div className="caroussel">
          {movies.map((movie) => (
            <Card
              title={movie.title}
              overview={movie.overview}
              poster={movie.poster}
              rated={movie.vote_average}
            />
          ))}
        </div>
        <div id="searchbtn">
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

export default App;
