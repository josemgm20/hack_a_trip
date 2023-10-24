import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import { useAuth } from '../../Hooks/useAuth'; // Import the useAuth hook

const headerStyles = {
    // Your existing styles
};

const Header = () => {
    const { authUser, authLogout } = useAuth(); // Use the useAuth hook

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
                        aria-label="Toggle navigation"
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
                            <li>
                                <Link to="/login" className="nav-link">
                                    Mi Cuenta
                                </Link>
                            </li>
                            {authUser && (
                                <li>
                                    <Link to="/" onClick={authLogout} className="nav-link">
                                        Cerrar Sesion
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
