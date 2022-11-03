import "./style.css";

export default function CardBack() {
  return (
    <div className="backImage">
      <div className="card1">
        <img
          className="posterBack"
          src="/src/assets/toystory.jpg"
          alt="Affiche Toy Story"
        />
      </div>
      <div className="card2">
        <img
          className="posterBack"
          src="/src/assets/forrestgump.jpg"
          alt="Affiche Forrest Gump"
        />
      </div>
    </div>
  );
}
