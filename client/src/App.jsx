// App.jsx
import React, { useState } from 'react'; // Import React and useState from React
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components from react-router-dom
import Welcome from './components/Welcome/Welcome'; // Import the Welcome component
import SignIn from './components/User/SignIn'; // Import the SignIn component
import Register from './components/User/Register'
import Dashboard from './components/User/Dashboard'
import NotFound from './components/Utls/NotFound';




function App() {
  return (
    <>

      <Routes> {/* Define routing for the application */}
        <Route path="/" element={<Welcome />} />
        <Route path="/account" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
    </>
  );
}

export default App; // Export the App component as the default export