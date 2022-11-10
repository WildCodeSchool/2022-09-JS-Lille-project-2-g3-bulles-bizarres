import "./style.css";

export default function Form() {
  return (
    <div className="containerForm">
      <div className="genre">Select a genre</div>
      <div className="action">
        <label htmlFor="1">
          <input type="checkbox" id="1" />
        </label>
        <h2>Action</h2>
      </div>
      <div className="sci-fi">
        <label htmlFor="2">
          <input type="checkbox" id="2" />
        </label>
        <h2>Sci-Fi</h2>
      </div>
      <div className="comedy">
        <label htmlFor="3">
          <input type="checkbox" id="3" />
        </label>
        <h2>Comedy</h2>
      </div>
      <div className="thriller">
        <label htmlFor="4">
          <input type="checkbox" id="4" />
        </label>
        <h2>Thriller</h2>
      </div>
      <div className="police-movie">
        <label htmlFor="5">
          <input type="checkbox" id="5" />
        </label>
        <h2>Crime</h2>
      </div>
      <div className="western">
        <label htmlFor="6">
          <input type="checkbox" id="6" />
        </label>
        <h2>Western</h2>
      </div>
      <div className="horror">
        <label htmlFor="7">
          <input type="checkbox" id="7" />
        </label>
        <h2>Horror</h2>
      </div>
      <div className="child-movie">
        <label htmlFor="8">
          <input type="checkbox" id="8" />
        </label>
        <h2>Youth</h2>
      </div>
      <div className="romantic">
        <label htmlFor="9">
          <input type="checkbox" id="9" />
        </label>
        <h2>Romantic</h2>
      </div>
      <button type="button" className="form-button">
        Search movies
      </button>
    </div>
  );
}
