// import Styled from 'styled-components';
import "./style.css";

export default function Card() {
  return (
    <section className="frontImage">
      <div className="card">
        <img src="/src/assets/avengers.jpg" alt="Affiche Avengers Endgame" />
        <div className="description">
          <h2>Avengers - Endgame</h2>
          <h3>SYNOPSIS</h3>
          <p>
            Thanos ayant anéanti la moitié de l’univers, les Avengers restants
            resserrent les rangs dans ce vingt-deuxième film des Studios Marvel,
            grande conclusion d’un des chapitres de l’Univers Cinématographique
            Marvel.
          </p>
          <p>REALISATION : Anthony et Joe Russo</p>
          <h4>CASTING</h4>
          <p>
            Robert Downey Jr. : Tony Stark / Iron Man. Chris Evans: Steve :
            Rogers / Captain America. Mark Ruffalo : Bruce Banner / Hulk. Chris
            Hemsworth : Thor. Scarlett Johansson : Natasha Romanoff / Black
            Widow. Jeremy Renner : Clint Barton / Hawkeye.
          </p>
          <img
            src="frontend/src/assets/bandeAnnonce.svg"
            alt="logoBandeAnnonce"
          />
          <p>Bande Annonce</p>;
        </div>
      </div>
    </section>
  );
}
