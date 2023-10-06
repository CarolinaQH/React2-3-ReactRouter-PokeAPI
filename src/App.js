import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./view/Home";
import Pokemones from "./view/Pokemones"
import PokeInfo from "./view/PokeInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pokemones" element={<Pokemones />}/>
          <Route path="/pokemones/:pokeSelect" element={<PokeInfo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
