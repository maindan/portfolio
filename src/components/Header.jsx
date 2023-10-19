import {useState} from 'react'

function Header() {
    const [activeLink, setLinkClick] = useState(null)

    function linkClick(page) {
        setLinkClick(page);
    }

    return(
        <div className="Header">
            <h1>Projeto1</h1>
            <nav>
                <a href="#" onClick={() => linkClick('home')} className={activeLink == 'home' ? 'active' : ''}>Home</a>
                <a href="#" onClick={() => linkClick('about')} className={activeLink == 'about' ? 'active' : ''}>About Me</a>
                <a href="#" onClick={() => linkClick('contact')} className={activeLink == 'contact' ? 'active' : ''}>Contact</a>
            </nav>
        </div>
    )
}

export default Header