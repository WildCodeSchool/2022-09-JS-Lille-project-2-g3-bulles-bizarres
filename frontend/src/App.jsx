import Slideshow from "./components/Carrousel/Caroussel";

import Logo from "./components/Header/Logo/Logo";
import Titre from "./components/Header/Titre/Titre";
import SearchButton from "./components/SearchButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="header">
          <Logo />
          <Titre />
        </div>
        <Slideshow />
        <div id="searchbtn">
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

export default App;
