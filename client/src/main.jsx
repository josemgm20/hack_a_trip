import React from 'react'
import ReactDOM from 'react-dom/client'

// Importamos los componentes
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
