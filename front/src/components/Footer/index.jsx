import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <div class="container">
            <footer class="py-3 my-4 footer">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/home" class="nav-link px-2 text-muted">Home</Link></li>
                    <li class="nav-item"><Link to="/travels" class="nav-link px-2 text-muted">Viagens</Link></li>
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">FAQs</Link></li>
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">About</Link></li>
                </ul>
                <p class="text-center text-muted">
                    © 2021 Company, Inc
                </p>
            </footer>
        </div>
    )
};