import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Register from '../../components/RegisterForm/';

export default function RegisterPage(){
    return(
        <div>
            <Header />

                <Register />

            <Footer />
        </div>
    )
}