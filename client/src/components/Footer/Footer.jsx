import React from 'react';

function Footer() {
    return (
        <footer className="bg-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We help travelers find the best destinations and plan their trips.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/explore">Explore</a>
                            </li>
                            <li>
                                <a href="/destinations">Destinations</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            Email: info@travelview.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
