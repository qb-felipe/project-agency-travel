import React from 'react';

import cover from '../../assets/img/cover.jpg';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Text from '../../components/Text';
import Carousel from '../../components/Carousel';

function Home(){
    return(
        <div>
            <Header />

            <section className="cover">
                <img id="cover-image" src={cover} alt="Site Cover" />
            </section>
            <section className="Text">
                <Text />
            </section>

            <section className="carousel">
                <Carousel />
            </section>

            <Footer />
        </div>      
    )
}

export default Home;