import Card from "@components/Cards/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }&language=en-US`
      )
      .then(({ data }) => {
        setMovies(data);
      });
  }, []);
  return (
    <div>
      <img
        className="posterdetails"
        src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
        alt={`Affiche ${movies.title}`}
      />
      <section className="details">
        <div className="heading">
          <div className="rating">
            <img
              className="ratedStar"
              src="../src/assets/ratedStar.svg"
              alt="Rated Star"
            />
            <p className="ratedText">{movies.vote_average}</p>
          </div>
          <div className="date">
            <img
              className="ratedStar"
              src="../src/assets/Calendar.svg"
              alt="calendar"
            />
            <p className="ratedText">{movies.release_date}</p>
          </div>
        </div>
        <div className="content">
          <h1 className="titleMovie">{movies.title}</h1>
          <p className="paragraph">{movies.overview}</p>
        </div>
        <div className="runtime">
          <img
            className="ratedStar"
            src="../src/assets/clock.svg"
            alt="clock"
          />
          <p className="runtime">Runtime :{movies.runtime}</p>
        </div>
        <div className="trailer">
          <img
            className="trailerLogo pulse"
            src="../src/assets/bandeAnnonce.svg"
            alt="logoBandeAnnonce"
          />
          <p className="trailerText ">Trailer</p>
        </div>
      </section>
    </div>
  );
}
