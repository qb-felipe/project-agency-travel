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
                    <div className="item">
                        <figure>
                            <img src={Anfield} alt="" />
                            <figcaption>
                                <h2>Conheça Anfield</h2>
                                <p>
                                    O Estádio Anfield é um estádio localizado em Liverpool, Inglaterra. 
                                    É a casa do time de futebol Liverpool FC 
                                    e um dos estádios considerados 5 Estrelas pela UEFA.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Beach} alt="" />
                            <figcaption>
                                <h2> Praia em Ilhas tropicais </h2>
                                <p>
                                Visite praias em ilhas tropicais em um lugar secreto. Você descobre o local só quando chegamos lá.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Cableway} alt="" />
                            <figcaption>
                                <h2> Pacote Santiago + Vale Nevado </h2>
                                <p>
                                    Aproveite o Chile, um país com muita diversidade e montanhas cobertas de gelo. Pacote Incluí o Vale Nevado em alta temporada
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Cover} alt="" />
                            <figcaption>
                                <h2> Praia </h2>
                                <p>
                                    Temos muitos pacotes com boas praias
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Coliseum} alt="" />
                            <figcaption>
                                <h2> Explore a cidade de Roma </h2>
                                <p>
                                    Roma, a capital da Itália, é uma cidade cosmopolita, enorme, com quase 3.000 anos de arte, arquitetura e cultura influentes no mundo todo e à mostra.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Louvre} alt="" />
                            <figcaption>
                                <h2> Museu do Louvre </h2>
                                <p>
                                    Conheça o maior museu de arte do mundo e um monumento histórico em Paris.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <figure>
                            <img src={Island} alt="" />
                            <figcaption>
                                <h2> Praias paradisíacas em ilhas desertas </h2>
                                <p>
                                Desfrute dessa experiência de conhecer praias paradisíacas em olhas desertas próximas ao Brasil
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="item"><img src={Lake} alt="" /></div>
                    <div className="item"><img src={Montain} alt="" /></div>
                    <div className="item"><img src={Road} alt="" /></div>
                    <div className="item"><img src={Tokyo} alt="" /></div>
                </div>
            </Container>
    )
}