import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/logo/logo.svg';

function Header(){
    return(
        <header class="p-3 bg-light text-white">
            <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src= {Logo} alt=""  />
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/home" class="nav-link px-2 text-dark">Home</Link></li>
                    <li><Link to="/travels" class="nav-link px-2 text-dark">Viajens</Link></li>
                    <li><Link to="/users" class="nav-link px-2 text-dark">Usuários</Link></li>
                    <li><a href="#" class="nav-link px-2 text-dark">Minhas Reservas</a></li>
                    <li><a href="#" class="nav-link px-2 text-dark">About</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                {/* <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" /> */}
                </form>

                <div class="text-end">
                <button type="button" class="btn btn-outline-dark me-2">Entrar</button>
                <button type="button" class="btn btn-warning"> Cadastrar </button>
                </div>
            </div>
            </div>
        </header>
    )
};

export default Header;