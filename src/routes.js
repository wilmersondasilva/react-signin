import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import PasswordReset from './components/PasswordReset'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
                <Route path="/password-recovery" component={PasswordReset} />
            </Switch>
        </BrowserRouter>
    )
}
