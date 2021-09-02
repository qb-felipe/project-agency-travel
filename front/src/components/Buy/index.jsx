import React from 'react';

import Logo from '../../assets/logo/logo.svg';

export default function Buy(){
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
                    <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Nome do pacote</h6>
                            <small className="text-muted">Descrição</small>
                            </div>
                            <span className="text-muted">R$1500</span>
                        </li>
                        {/* <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Second product</h6>
                            <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Third item</h6>
                            <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">−$5</span>
                        </li> */}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total </span>
                            <strong>R$ 1500</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                    </form>
            </div>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Informações Pessoais</h4>
                <form className="needs-validation" novalidate="">
                <div className="row g-3">
                    <div className="col-sm-6">
                    <label for="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                    </div>

                    <div className="col-sm-6">
                    
                    </div>

                    <div className="col-12">
                    
                    </div>

                    <div className="col-12">
                        <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="col-12">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div className="col-md-5">
                        <label for="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required="">
                            <option value="">Choose...</option>
                            <option>Estados Unidos</option>
                            <option>Brasil</option>
                            <option>Outro...</option>
                        </select>
                    </div>


                    <div className="col-md-3">
                        <label for="zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required="" />
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="my-3">
                    <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                    <label className="form-check-label" for="credit">Credit card</label>
                    </div>
                    <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                    <label className="form-check-label" for="debit">Debit card</label>
                    </div>
                    <div className="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                    <label className="form-check-label" for="paypal">PayPal</label>
                    </div>
                </div>

                <div className="row gy-3">
                        <div className="col-md-6">
                            <label for="cc-name" className="form-label">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label for="cc-number" className="form-label">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="cc-expiration" className="form-label">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="cc-cvv" className="form-label">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                </div>

                <hr className="my-4" />

                <button className="w-100 btn btn-primary btn-lg" type="submit">Finalizar Reserva</button>
                </form>
            </div>
            </div>
        </main>

</div>
    )
};