import React from 'react';

import cover from '../../assets/img/cover.png';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Text from '../../components/Text';
import Carousel from '../../components/Carousel';

function Home(){
    return(
        <div>
            <Header />

            <img id="cover-image" src={cover} alt="Site Cover" />

            <Text />

            <Carousel />


            <Footer />
        </div>      
    )
}

export default Home;