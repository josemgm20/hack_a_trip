import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function NotFound() {
    return (
        <div>
            <Header /> {/* Renderiza el encabezado de la página */}
            <div className="container my-5">
                <h1 className="display-4">404 - Not Found</h1> {/* Encabezado para página no encontrada */}
                <p className="lead">
                    Sorry, the page you are looking for does not exist.
                </p> {/* Mensaje de página no encontrada */}
            </div>
            <Footer /> {/* Renderiza el pie de página de la página */}
        </div>
    );
}

export default NotFound; // Exporta el componente NotFound como exportación predeterminada
