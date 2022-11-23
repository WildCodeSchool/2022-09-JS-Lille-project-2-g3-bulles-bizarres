import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState("");

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
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_SECRET_API_KEY
        }&language=en-US`
      )
      .then(({ data }) => {
        setTrailerKey(
          data.results.find((film) => {
            return film.name === "Official Trailer";
          }).key
        );
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
        {trailerKey && (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </section>
    </div>
  );
}
