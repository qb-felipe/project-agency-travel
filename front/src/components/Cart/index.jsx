import React,  {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import Logo from '../../assets/logo/logo.svg';

export default function Cart(){
    
    const history = useHistory();
    // const [products, setProducts] = useState([]);

    // useEffect( async () => {

    //     api
    //     .get('/products/id')
    //     .then((response) => setProducts(response.data))
    //     .catch((err) => {
    //         console.error("Ocorreu um erro" + err);
    //     });
    // }, []);
    
    return(

        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={Logo} alt="" width="72" height="57" />
                    <h2>Tela de Pagamento</h2>
                    <p className="lead">
                        Essa é a tela de pagamento, falta pouco para fechar o seu pedido e ir ao seu destino desejado aproveitar seu passeio.
                    </p>
                </div>

            <div className="row g-5">

            <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Carrinho</span>
                                <span className="badge bg-primary rounded-pill">1</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                    <h6 className="my-0"> Nome do Pacote </h6>
                                    <small className="text-muted"> Descrição do pacote </small>
                                    </div>
                                    <span className="text-muted"> R$ 15000 </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total </span>
                                    <strong> R$ 15000 </strong>
                                </li>
                            </ul>

                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Cumpom de desconto" />
                                    <button type="submit" className="btn btn-secondary">Inserir</button>
                                </div>
                            </form>
                    </div>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Informações Pessoais</h4>
                <form className="needs-validation" novalidate="">
                <div className="row g-3">
                    <div className="col-sm-12">
                        <label for="name" className="form-label">Nome Completo</label>
                        <input type="text" className="form-control" id="name" placeholder="" value="" required="" />
                    </div>

                    <div className="col-7">
                        <label for="address" className="form-label"> Endereço </label>
                        <input type="text" className="form-control" id="address" placeholder="" value="" />
                    </div>

                    <div className="col-5">
                        <label for="phone_number" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="phone_number" placeholder="" required=""  value=""/>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3"> Dados da Reserva </h4>

                    <div className="col-md-8">
                        <label for="destiny" className="form-label"> Destino </label>
                        <input type="text" className="form-control" id="destiny" placeholder="" value="" required="" />
                    </div>

                    <div className="col-md-2">
                        <label for="days" className="form-label">Dias</label>
                        <input type="number" className="form-control" id="days" placeholder="" value="" required="" />
                    </div>

                    <div className="col-md-2">
                            <label for="quantity" className="form-label"> Quantidade </label>
                            <input type="number" className="form-control" id="quantity" placeholder="" required="" value="" />
                    </div>

                </div>

                <hr className="my-4" />

                <h4 className="mb-3"> Dados do Pagamento </h4>

                <div className="my-3">
                    <div className="form-check">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" for="debit">Boleto</label>
                    </div>
                    <div className="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" for="paypal"> Pix </label>
                    </div>
                    <div className="form-check">
                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                        <label className="form-check-label" for="credit"> Cartão de Crédito </label>
                    </div>
                </div>

                <div className="row gy-3">

                        <div className="col-md-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected> Parcelas </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>

                </div>

                <hr className="my-4" />

                <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={() => history.push('/travels')}>Finalizar Reserva</button>
                </form>
            </div>
            </div>
        </main>

</div>
    )
};