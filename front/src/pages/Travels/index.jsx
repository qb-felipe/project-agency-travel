import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Product from '../../components/Product';

function TravelList(){

    return(
        <div>
            <Header />
            <h1>
            Essa é a lista de viagens
            </h1>

            <section>
                <h3> Viagens </h3>
                <Product />
            </section>

            <Footer />
        </div>
    )
}

export default TravelList;