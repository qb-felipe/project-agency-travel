import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './style';

export default function Text(){

    const history = useHistory();

    return(
        <Container>  
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold"> Bora Viajar? </h1>
                <p class="col-md-8 fs-4 text">
                    Estamos te esperando em uma de nossas aventuras, 
                    nós criamos as mais incríveis experiências de passeios e viajens, nacionais
                    e internacionais em nossos pacotes. Essa é a oportunidade que faltava para 
                    você finalmente tirar aquela viagem planejada do papel e curtir o melhor da vida.
                </p>
                <button class="btn btn-primary btn-lg" type="button" onClick={ () => history.push('/travels')}> Conhecer Pacotes </button>
            </div>
        </Container>
    )
};