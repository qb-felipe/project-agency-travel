import React from 'react';

import cover from '../../assets/img/cover.jpg';
import './style.css';
import Header from '../../components/Header';
import Text from '../../components/Text';

function Home(){

    return(
        <div>
            <Header />
            <section className="cover">
                <img id="cover-image" src={cover} />
            </section>
            <section className="calltoaction">
                <Text />
            </section>
        </div>      
    )
}

export default Home;