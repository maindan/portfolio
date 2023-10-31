import { Link } from 'react-router-dom';
import '../style/Header.css'

function Header() {
    return(
        <nav className='Header'>
            <h1>//Dan</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">Sobre</Link></li>
                <li><Link to="/Contact">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Header