import "./App.css";
import SearchButton from "@components/SearchButton";

function App() {
  return (
    <div className="App">
      <p>coucou</p>

      <div className="layout">
        <div className="header"> Header is here!</div>
        <div className="main">Caroussel is Here! </div>
        <div className="searchbtn">
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

export default App;
