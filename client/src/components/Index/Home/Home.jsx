import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function Welcome() {
  return (
    <div>
      <Header /> {/* Renderiza el encabezado de la página */}
      <div className="container my-5">
        <h1 className="display-4">Welcome to Hack a Trip!</h1> {/* Encabezado principal */}
        <p className="lead">
          Discover amazing destinations, plan your trips, and share your experiences with fellow travelers.
        </p> {/* Párrafo principal */}
        <a href="/explore" className="btn btn-primary btn-lg">Explore</a> {/* Enlace para explorar */}
      </div>
      <Footer /> {/* Renderiza el pie de página de la página */}
    </div>
  );
}

export default Welcome; // Exporta el componente Welcome como exportación predeterminada
