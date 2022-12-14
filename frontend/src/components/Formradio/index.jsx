import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@components/Cards/Card";
import "./style.css";
import { Link } from "react-router-dom";

export default function Formradio() {
  const [movies, setMovies] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = [
    {
      name: "Action",
      id: 1,
      genre: 28,
    },
    {
      name: "Scifi",
      id: 2,
      genre: 878,
    },
    {
      name: "Comedy",
      id: 3,
      genre: 35,
    },
    {
      name: "Thriller",
      id: 4,
      genre: 53,
    },
    {
      name: "Crime",
      id: 5,
      genre: 80,
    },
    {
      name: "Western",
      id: 6,
      genre: 37,
    },
    {
      name: "Horror",
      id: 7,
      genre: 27,
    },
    {
      name: "Youth",
      id: 8,
      genre: 16,
    },
    {
      name: "Romantic",
      id: 9,
      genre: 10749,
    },
  ];

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${selectedRadio}`
      )
      .then(({ data }) => {
        setMovies(data.results);
      });
  }, [selectedRadio]);

  return (
    <>
      <div className="containerForm">
        {radios.map((radio) => (
          <figure>
            <label htmlFor={radio.id}>
              <input
                key={radio.id}
                type="checkbox"
                id={radio.id}
                name={radio.name}
                checked={radios === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.value)}
                value={radio.genre}
              />
            </label>
            <figcaption>{radio.name}</figcaption>
          </figure>
        ))}
      </div>
      {selectedRadio && (
        <div className="cancel">
          <button
            type="button"
            className="cancelbtn"
            onClick={() => setSelectedRadio("")}
          >
            <img
              className="cancelbtn"
              src="../src/assets/refresh.svg"
              alt="cancel"
            />
          </button>
        </div>
      )}
      <section className="search">
        {movies.map((movie) => (
          <Link to={`/MovieDetails/${movie.id}`} key={movie.id}>
            <Card
              title={movie.title}
              poster={movie.poster_path}
              overview={movie.overview}
              hoverable={false}
              rated={movie.vote_average}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
