import { Routes, Route, BrowserRouter } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Logo from "./components/Header/Logo/Logo";
import Titre from "./components/Header/Titre/Titre";
import SearchButton from "./components/SearchButton/index";
import "./App.css";
import MobileForm from "./pages/MobileForm";
import MobileResponse from "./pages/MobileResponse";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MobileForm" element={<MobileForm />} />
        <Route path="/MobileResponse" element={<MobileResponse />} />
      </Routes>
      <div className="App">
        <div className="layout">
          <div className="header">
            <Logo />
            <Titre />
            <div className="Carousel">
              <Carousel />
            </div>

            <div id="searchbtn">
              <SearchButton />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
