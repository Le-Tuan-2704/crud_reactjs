import React, { useState } from 'react';
import { BrowserRouter, Route, useParams } from 'react-router-dom';
import CreateAccount from '../common/createAccount/CreateAccount';
import Login from '../common/login/Login';
import HomePape from '../view/HomePape'

function CheckLogin(props) {

    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={CreateAccount} />
            <Route exact path="/pape" component={HomePape} />
        </BrowserRouter>
    );
}

export default CheckLogin;