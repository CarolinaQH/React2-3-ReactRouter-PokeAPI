import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../stylesheets/pokemones.css'

function Pokemones() {
    const [showPokemons, setShowPokemons] = useState([]);
    const [pokeSelect, setPokeSelect] = useState('')
    const navigate = useNavigate();

    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';

    const getPokeApi = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setShowPokemons(data.results);
    }

    useEffect(() => {
        getPokeApi()
    }, [])

    const goPoke = () => {
        navigate(`/pokemones/${pokeSelect}`);
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h2>Selecciona un Pokémon</h2>
            <div className="d-flex flex-column align-items-center mt-4">
                <select value={pokeSelect} onChange={(poke) => setPokeSelect(poke.target.value)}>
                    <option value='' disabled defaultValue>Pokemones</option>
                    {showPokemons.map(({name}, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
                <button onClick={goPoke} className="bg-dark text-light mt-2">Ver Detalle</button>
            </div>
        </div>
    )
}

export default Pokemones;