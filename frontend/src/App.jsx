import Card from "@components/Cards/Card/Index";
import CardBack from "@components/Cards/CardsBack/Index";

import "./App.css";

import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import SearchButton from "@components/SearchButton";

function App() {
  return (

    <section className="caroussel">
      <Card />
      <CardBack />
    </section>
    
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
