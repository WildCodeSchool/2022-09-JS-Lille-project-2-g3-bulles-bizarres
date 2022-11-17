import { Routes, Route } from "react-router-dom";
import "./App.css";
import MobileForm from "./pages/MobileForm";
import MobileResponse from "./pages/MobileResponse";
import Home from "./pages/Home";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MobileForm" element={<MobileForm />} />
        <Route path="/MobileResponse" element={<MobileResponse />} />
      </Routes>
      </div>
  );
}

export default App;
