import Logo from "./components/Header/Logo/Logo";
import Titre from "./components/Header/Titre/Titre";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="header">
          <Logo />
          <Titre />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
