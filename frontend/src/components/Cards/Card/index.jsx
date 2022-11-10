import "../../../services/reset.css";
import PropTypes from "prop-types";
import "./style.css";

export default function Card({ title, overview, rated, hoverable }) {
  return (
    <section className="frontImage">
      <div className={`card ${hoverable ? "hoverable" : ""}`}>
        <img
          className="poster"
          src="/src/assets/avengers.jpg" /* {poster} */
          alt="Affiche Avengers Endgame"
        />
        <div className="description">
          <h1>{title}</h1>
          <h2>Overview</h2>
          <p className="paragraph">{overview}</p>
          <p className="rated">{rated}</p>
          <div className="trailer">
            <img
              className="trailerLogo"
              src="src/assets/bandeAnnonce.svg"
              alt="logoBandeAnnonce"
            />
            <p className="textTrailer">Bande Annonce</p>
          </div>
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
};
