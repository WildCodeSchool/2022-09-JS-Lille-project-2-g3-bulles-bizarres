import Card from "@components/Cards/Card/Index";
import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import SearchButton from "@components/SearchButton";
import axios from "axios";
import React from "react";

import "./App.css";

function App() {
  const [movies, setMovies] = React.useState([]);
  const getMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=f352c00b6a6dc4de283669f3f964df1a&language=en-US&page=1"
      )
      .then((response) => response.data)
      .then((data) => {
        setMovies(data.results);
      });
  };

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
        <button className="getMovie" type="button" onClick={getMovies}>
          Get Movie
        </button>
        <div id="searchbtn">
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

export default App;
