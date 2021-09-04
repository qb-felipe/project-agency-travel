import React from 'react';

import Logo from '../../assets/logo/logo.svg';
import { Container } from './style';

export default function Buy(){
    return(
        <Container>
        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={Logo} alt="" width="72" height="57" />
                    <h2>Bem vindo</h2>
                    <p className="lead">
                        Estamos quase lá! Faça seu cadastro para poder desfrutar da experiência de ser um de nossos usuários e viajar pelo mundo.
                    </p>
                </div>

                <div className="col-md-7 col-lg-8 personal-information">
                    <form className="needs-validation" novalidate="">
                        <div className="row g-3 userdata">
                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">Nome Completo</label>
                                <input type="text" className="form-control" id="name" placeholder="Nome Completo" value="" required="" />
                                <div className="invalid-feedback">
                                    Você deve digitar seu nome.
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">Data de Nascimento</label>
                                <input type="date" className="form-control" id="birth_date" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Você deve digitar seu nome.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label"> Endereço <span className="text-muted">(Completo)</span></label>
                                <input type="text" className="form-control" id="address" placeholder="" />
                                <div className="invalid-feedback">
                                    Por favor, digite o seu endereço.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label for="cep" className="form-label">Código Postal</label>
                                <input type="text" className="form-control" id="cep" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Digite seu código postal corretamente
                                </div>
                            </div>

                            <div className="col-md-1">
                                <label for="ddd" className="form-label">DDD</label>
                                <input type="text" className="form-control" id="ddd" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Digite seu ddd corretamente
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label for="phone_number" className="form-label">Telefone</label>
                                <input type="text" className="form-control" id="phone_number" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Digite seu telefone corretamente
                                </div>
                            </div>
                        
                            <hr className="my-4" />

                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">Login</label>
                                <input type="text" className="form-control" id="name" placeholder="Nome Completo" value="" required="" />
                                <div className="invalid-feedback">
                                    É necessário criar um login
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label for="password" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="password" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    É necessário criar uma senha válida
                                </div>
                            </div>

                        </div>

                        <button className="w-100 btn btn-primary btn-lg" type="submit">Finalizar Cadastro</button>
                    </form>
                </div>
            </main>

        </div>
        </Container>
    )
};