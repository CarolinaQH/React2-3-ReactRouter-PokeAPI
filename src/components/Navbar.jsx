import { NavLink } from "react-router-dom";
import '../stylesheets/navbar.css'

const Navbar = () => {
    const setActive = ({ isActive }) => (isActive ? 'active' : 'inactive')
    const pokeballImg = 'https://7-eleven.com.mx/wp-content/uploads/2016/10/7eleven-pokeparada-pokemon-go.png'
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid justify-content-around">
                <div className="navbar-brand">
                    <div className="img-container">
                    <img src={pokeballImg} alt="poke-ball" />
                    </div>
                </div>
                <div>
                    <NavLink className={setActive} to='/'>Home</NavLink>
                    <NavLink className={setActive} to='/pokemones'>Pokémon</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;