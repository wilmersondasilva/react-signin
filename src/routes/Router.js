import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import PasswordReset from '../components/PasswordReset'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/password-recovery">
                    <PasswordReset />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
