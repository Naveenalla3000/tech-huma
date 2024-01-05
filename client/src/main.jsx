import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Providers } from './context/Provider.jsX'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Providers>
  // </React.StrictMode>,
)
