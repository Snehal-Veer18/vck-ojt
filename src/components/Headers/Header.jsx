import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <div className="navbar-logo">Vivekanand College</div>
            <button className="hamburger" onClick={toggleMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" id="head" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" id="head" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/courses" id="head" onClick={() => setIsMenuOpen(false)}>Courses</Link>
                <Link to="/contact" id="head" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link to="/admissions" id="head" onClick={() => setIsMenuOpen(false)}>
                    <button className="nav-btn">Apply Now!</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header