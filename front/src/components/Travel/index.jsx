import React from 'react';

import { Container } from './style.js';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

import Anfield from '../../assets/carousel/anfield.jpg'

export default function Travel(){

    const history = useHistory();

    function addCart(id){
        // .post('/purchase')
        history.push(`/purchase/id`);
    }

    return(
        <>
            <Container>

                <div className="package-cover">
                    <img className="img-cover" src={Anfield} alt="" />
                </div>

                <div className="description">

                    <h3> Anfield Arena </h3>
                    <p>
                        O Estádio Anfield é um estádio localizado em Liverpool, Inglaterra. 
                        É a casa do time de futebol Liverpool FC e um dos estádios considerados 
                        5 Estrelas pela UEFA. 
                    </p>
                    <div className="items-description">
                        <span className="hotel">
                            <i className="pi pi-home"></i>
                            Algum Hotel
                        </span>
                        <br />
                        <span className="location">
                            <i className="pi pi-map-marker"></i>
                            Liverpool-Inglaterra
                        </span>
                        <br />
                        <span className="price">
                            <i className="pi pi-money-bill"></i>
                            R$ 15.000,00
                        </span>
                        <br />
                        <span className="days">
                            <i className="pi pi-calendar"></i>
                            7 dias
                        </span>
                    </div>
                </div>
                <div className="buttons">
                    {/* prod.id */}
                    <Button label="Comprar" icon="pi pi-plus" iconPos="right" onClick={addCart} />
                </div>
            </Container>
        
        </>
    )
};