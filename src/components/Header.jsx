import { NavLink } from 'react-router-dom';
import '../style/Header.css'

function Header() {
    return(
        <nav className='Header'>
            <h1>//Dan</h1>
            <ul>
                <li><NavLink to="/portfolio" exact activeClassName="active" >Home</NavLink></li>
                <li><NavLink to="/portfolio/About" exact activeClassName="active">Sobre</NavLink></li>
                <li><NavLink to="/portfolio/Contact" exact activeClassName="active">Contato</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header