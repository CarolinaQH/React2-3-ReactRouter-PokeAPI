import { useEffect, useState } from "react";
import '../stylesheets/home.css'

function Home() {
    const [pokemonHome, setPokemonHome] = useState('');
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    const homeImg = async () => {
            const res = await fetch(url);
            const data = await res.json();
            const pikachuImg = data.sprites.other.dream_world.front_default;
            setPokemonHome(pikachuImg);
    }

    useEffect(() => {
        homeImg()
    }, [])

    return (
        <>
        <div className="d-flex justify-content-center mt-5">
            <div>
                <h1 className="welcome-title">Bienvenido maestro pokémon</h1>
                <div className="d-flex justify-content-center mt-5">
                    <img src={pokemonHome} alt="pikachu" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;