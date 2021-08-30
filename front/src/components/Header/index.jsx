import React from 'react';
import  '../../bootstrap/bootstrap.min.css';

import {Link} from 'react-router-dom';

function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Via JÁ
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/home" class="nav-link" >
                            Home
                        </Link> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Pacotes
                        </a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Quem somos 
                        </a> 
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;