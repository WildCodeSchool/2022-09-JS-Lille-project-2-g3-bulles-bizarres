import "../../../services/reset.css";
import PropTypes from "prop-types";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Card({
  title,
  overview,
  rated,
  hoverable,
  poster,
  id,
}) {
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    if (!hoverable) return;
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
  }, [hoverable]);

  return (
    <section className="frontImage">
      <div className={`card ${hoverable ? "hoverable" : ""}`}>
        <img
          className="posterFront"
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt={`Affiche ${title}`}
        />
        <div className="descriptionFront">
          <div className="ratedFront slide-bottom">
            <img
              className="ratedStarFront"
              src="src/assets/ratedStar.svg"
              alt="Rated Star"
            />
            <p className="ratedTextFront">{rated}</p>
          </div>
          <div className="contentFront">
            <h1 className="titleMovieFront">{title}</h1>
            <p className="paragraphFront">{overview}</p>
          </div>
          {trailerKey && (
            <div className="trailerFront">
              <img
                className="trailerLogoFront pulse"
                src="src/assets/bandeAnnonce.svg"
                alt="logoBandeAnnonce"
              />

              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${trailerKey}`}
                className="trailerTextFront "
                rel="noreferrer"
              >
                Trailer
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rated: PropTypes.number.isRequired,
  hoverable: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
