import "./App.css";

import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import SearchButton from "@components/SearchButton";

function App() {
  return (
    <div className="App">
      <p>coucou</p>

      <div className="layout">
        <div className="header">
          <Logo />
          <Titre />
        </div>
        <div className="main">Caroussel is Here! </div>
        <div className="searchbtn">
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

export default App;
