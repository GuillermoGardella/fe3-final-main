
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { ContextProvider } from "./Context/Context";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider> 
        <App />
    </ContextProvider>
</BrowserRouter>
);


