import "./style.css";

export default function Card() {
  return (
    <section className="frontImage">
      <div className="card">
        <img
          className="poster"
          src="/src/assets/avengers.jpg"
          alt="Affiche Avengers Endgame"
        />
        <div className="description">
          <h2>Avengers - Endgame</h2>
          <h4>SYNOPSIS</h4>
          <p className="paragraph">
            Thanos ayant anéanti la moitié de l’univers, les Avengers restants
            resserrent les rangs dans ce vingt-deuxième film des Studios Marvel,
            grande conclusion d’un des chapitres de l’Univers Cinématographique
            Marvel.
          </p>
          <p className="paragraph">
            <h4>REALISATION </h4> Anthony et Joe Russo
          </p>
          <h4>CASTING</h4>
          <p className="paragraph">
            Robert Downey Jr. : Tony Stark / Iron Man. Chris Evans: Steve :
            Rogers / Captain America. Mark Ruffalo : Bruce Banner / Hulk. Chris
            Hemsworth : Thor. Scarlett Johansson : Natasha Romanoff / Black
            Widow. Jeremy Renner : Clint Barton / Hawkeye.
          </p>
          <div className="trailer">
            <img src="src/assets/bandeAnnonce.svg" alt="logoBandeAnnonce" />
            <p className="textTrailer">Bande Annonce</p>
          </div>
        </div>
      </div>
    </section>
  );
}
