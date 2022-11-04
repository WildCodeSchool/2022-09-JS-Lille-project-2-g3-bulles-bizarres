import "../../../services/reset.css";
import PropTypes from "prop-types";
import "./style.css";

export default function Card({ hoverable }) {
  return (
    <section className="frontImage">
      <div className={`card ${hoverable ? "hoverable" : ""}`}>
        <img
          className="poster"
          src="/src/assets/avengers.jpg"
          alt="Affiche Avengers Endgame"
        />
        <div className="description">
          <h1>Avengers - Endgame</h1>
          <h2>SYNOPSIS</h2>
          <p className="paragraph">
            Thanos ayant anéanti la moitié de l’univers, les Avengers restants
            resserrent les rangs dans ce vingt-deuxième film des Studios Marvel,
            grande conclusion d’un des chapitres de l’Univers Cinématographique
            Marvel.
          </p>
          <h2>REALISATION </h2>
          <p className="paragraph">Anthony et Joe Russo</p>
          <h2>CASTING</h2>
          <p className="paragraph">
            Robert Downey Jr. : Tony Stark / Iron Man. Chris Evans: Steve :
            Rogers / Captain America. Mark Ruffalo : Bruce Banner / Hulk. Chris
            Hemsworth : Thor. Scarlett Johansson : Natasha Romanoff / Black
            Widow. Jeremy Renner : Clint Barton / Hawkeye.
          </p>
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
  hoverable: PropTypes.bool.isRequired,
};
