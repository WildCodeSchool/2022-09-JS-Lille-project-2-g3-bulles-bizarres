import { Routes, Route, BrowserRouter } from "react-router-dom";
import Logo from "./components/Header/Logo/Logo";
import Titre from "./components/Header/Titre/Titre";
import SearchButton from "./components/SearchButton";
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
        <Route path="*" element={<Home />} />
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
    </BrowserRouter>
  );
}

export default App;
