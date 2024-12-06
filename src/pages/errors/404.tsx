import React from 'react';
import { NavLink } from 'react-router-dom'; // Importujemy NavLink
import './404.scss'; // Importujemy plik stylów

export default function Error404() {
    return (
        <div className="error-404">
            <h1>404</h1>
            <p>Strona, której szukasz, nie została znaleziona.</p>
            <NavLink to="/" className="back-home-btn">
                Wróć do strony głównej
            </NavLink>
        </div>
    );
}
