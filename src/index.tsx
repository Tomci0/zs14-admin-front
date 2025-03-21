import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import App from './App';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Router>
        <App />
    </Router>
);
