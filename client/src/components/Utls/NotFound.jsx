import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function NotFound() {
    return (
        <div>
            <Header />
            <div className="container my-5">
                <h1 className="display-4">404 - Not Found</h1>
                <p className="lead">
                    Sorry, the page you are looking for does not exist.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
