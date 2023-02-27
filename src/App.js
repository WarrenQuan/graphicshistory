import './App.css';
import Home from "./components/home/Home";
import Prehistory from "./components/pre-history/Prehistory";
import Modern from "./components/modern/Modern";
import CAD from "./components/cad_modeling/CAD";
import ADAM from "./components/ADAM/ADAM";
import Opensource from "./components/opensource/Opensource";
import Widespread from "./components/widespread/Widespread";

function App() {
  return (
    <div className="App">
      <div className="sections">
        <Home/>
        <Prehistory/>
        <CAD/>
        <ADAM/>
        <Widespread/>
        <Opensource/>
        <Modern/>
      </div>
  </div>
  );
}

export default App;
