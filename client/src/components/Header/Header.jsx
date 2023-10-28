<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importar el archivo CSS

const headerStyles = {
    // Tus estilos existentes
};

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand" style={headerStyles.navbarBrand}>
                        <img src="/hackatrip.ico" alt="Hack a Trip" className="icon" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Alternar navegación"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/explore" className="nav-link">
                                    Explorar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/destinations" className="nav-link">
                                    Destinos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Mi Cuenta
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
=======
import './Header.css';

const Header = () => {
    return (
    <header>
        <h1>Hack A Trip</h1>
    </header>
    );
};

export default Header;
>>>>>>> origin/javi
