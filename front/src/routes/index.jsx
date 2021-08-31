import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import Travels from '../pages/Travels';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <Route path="/login" component={LoginPage} />
                <Route path="/home" component={Home} />
                <Route path="/travels" component={Travels} />
            </Switch>
        </BrowserRouter>  
    );
};

export default Router;