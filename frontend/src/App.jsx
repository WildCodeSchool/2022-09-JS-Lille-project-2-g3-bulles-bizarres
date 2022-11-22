import { Routes, Route } from "react-router-dom";
import "./App.css";
import MobileForm from "./pages/MobileForm";
import MobileResponse from "./pages/MobileResponse";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MobileForm" element={<MobileForm />} />
        <Route path="/MobileResponse" element={<MobileResponse />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
