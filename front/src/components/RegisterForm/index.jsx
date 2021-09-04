import React, { useEffect, useState } from 'react';

import Logo from '../../assets/logo/logo.svg';
import { Container } from './style';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function RegisterForm(){

    const history = useHistory();

    // const [user, setUser] = useState();

    // const [name, setName] = useState();
    // const [birth, setBirth] = useState();
    // const [address, setAdress] = useState();
    // const [cep, setCep] = useState();
    // const [ddd, setDdd] = useState();
    // const [phone, setPhone] = useState();
    // const [login, setLogin] = useState();
    // const [password, setPassword] = useState();
 
    

        // const data = {
        //     name : name,
        //     birth_date: birth,
        //     address: address,
        //     cep : cep,
        //     ddd : ddd,
        //     phone_number : phone,
        //     login : login,
        //     password : password
        // };


        // useEffect( async () =>{
        //     api
        //         .post('/users/', data)
        //         .then()
        //         .catch((err) => {
        //             console.error("Ocorreu um erro ao cadastrar o usuário" + err);
        //     });

        // }, [user]);

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
                                <label for="name" className="form-label">Nome Completo</label>
                                <input type="text" className="form-control" id="name" placeholder="Nome Completo" required="" />

                            </div>
                            <div className="col-sm-6">
                                <label for="birth_date" className="form-label">Data de Nascimento</label>
                                <input type="date" className="form-control" id="birth_date" placeholder="" required="" />

                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label"> Endereço <span className="text-muted">(Completo)</span></label>
                                <input type="text" className="form-control" id="address" placeholder=""   />

                            </div>

                            <div className="col-md-4">
                                <label for="cep" className="form-label">Código Postal</label>
                                <input type="text" className="form-control" id="cep" placeholder="" required="" />

                            </div>

                            <div className="col-md-1">
                                <label for="ddd" className="form-label">DDD</label>
                                <input type="text" className="form-control" id="ddd" placeholder="" required=""  />

                            </div>

                            <div className="col-md-4">
                                <label for="phone_number" className="form-label">Telefone</label>
                                <input type="text" className="form-control" id="phone_number" placeholder="" required=""   />

                            </div>
                        
                            <hr className="my-4" />

                            <div className="col-sm-6">
                                <label for="login" className="form-label">Login</label>
                                <input type="text" className="form-control" id="login" placeholder="" required=""  />

                            </div>
                            <div className="col-sm-6">
                                <label for="password" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="password" placeholder="" required="" />

                            </div>

                        </div>

                        <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={() => history.push('/login')}> Finalizar Cadastro </button>
                    </form>
                </div>
            </main>

        </div>
        </Container>
    )
};