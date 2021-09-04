import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import Travels from '../pages/Travels';
import Users from '../pages/Users';
import Purchase from '../pages/Purchase';
import Register from '../pages/RegisterPage';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/home" from="/" />
                <Route path="/login" component={LoginPage} />
                <Route path="/home" component={Home} />
                <Route path="/travels" component={Travels} />
                <Route path="/users" component={Users} />
                <Route path="/purchase" component={Purchase} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>  
    );
};

export default Router;