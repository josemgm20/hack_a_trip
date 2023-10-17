//Welcome.jsx

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Welcome() {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h1 className="display-4">Welcome to TravelView</h1>
        <p className="lead">
          Discover amazing destinations, plan your trips, and share your experiences with fellow travelers.
        </p>
        <a href="/explore" className="btn btn-primary btn-lg">Explore</a>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
