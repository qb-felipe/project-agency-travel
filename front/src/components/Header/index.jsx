import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">
                Via JÁ
            </Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/home" class="nav-link" >
                            Home
                        </Link> 
                    </li>
                    <li class="nav-item">
                        <Link to="/travels" class="nav-link" >
                            Pacotes
                        </Link> 
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">
                            Quem somos 
                        </Link> 
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;