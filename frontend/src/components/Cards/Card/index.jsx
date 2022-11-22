import "../../../services/reset.css";
import PropTypes from "prop-types";
import "./style.css";

export default function Card({ title, overview, rated, hoverable, poster }) {
  return (
    <section className="frontImage">
      <div className={`card ${hoverable ? "hoverable" : ""}`}>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt={`Affiche ${title}`}
        />
        <div className="description">
          <div className="rated slide-bottom">
            <img
              className="ratedStar"
              src="src/assets/ratedStar.svg"
              alt="Rated Star"
            />
            <p className="ratedText">{rated}</p>
          </div>
          <div className="content">
            <h1 className="titleMovie">{title}</h1>
            <p className="paragraph">{overview}</p>
          </div>
          <div className="trailer">
            <img
              className="trailerLogo pulse"
              src="src/assets/bandeAnnonce.svg"
              alt="logoBandeAnnonce"
            />
            <p className="trailerText ">Trailer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    rated: PropTypes.number.isRequired,
    hoverable: PropTypes.bool.isRequired,
    poster: PropTypes.string.isRequired,
  }),
};

Card.defaultProps = {
  card: {
    title: "",
    overview: "",
    rated: 0,
    hoverable: false,
    poster: "",
  },
};
