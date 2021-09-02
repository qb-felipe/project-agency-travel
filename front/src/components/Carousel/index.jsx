import React from 'react';

import Cover from '../../assets/img/cover.jpg';
import Anfield from '../../assets/carousel/anfield.jpg';
import Beach from '../../assets/carousel/beach.jpeg';
import Cableway from '../../assets/carousel/cableway-montain.jpg';
import Coliseum from '../../assets/carousel/coliseum.jpeg';
import Island from '../../assets/carousel/island.jpg';
import Lake from '../../assets/carousel/lake.jpg';
import Louvre from '../../assets/carousel/louvre-museum.jpg';
import Montain from '../../assets/carousel/montain.jpg';
import Road from '../../assets/carousel/road.jpg';
import Tokyo from '../../assets/carousel/tokyo.jpeg';


import { Container } from './style';

export default function Carousel(){
    return(
            <Container>
                <div className="owl-carousel owl-theme">
                    <div className="item"><img src={Anfield} alt="" /></div>
                    <div className="item"><img src={Beach} alt="" /></div>
                    <div className="item"><img src={Cableway} alt="" /></div>
                    <div className="item"><img src={Cover} alt="" /></div>
                    <div className="item"><img src={Coliseum} alt="" /></div>
                    <div className="item"><img src={Island} alt="" /></div>
                    <div className="item"><img src={Lake} alt="" /></div>
                    <div className="item"><img src={Louvre} alt="" /></div>
                    <div className="item"><img src={Montain} alt="" /></div>
                    <div className="item"><img src={Road} alt="" /></div>
                    <div className="item"><img src={Tokyo} alt="" /></div>
                </div>
            </Container>
    )
}