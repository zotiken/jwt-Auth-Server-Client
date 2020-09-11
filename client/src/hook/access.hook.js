import React,{ useContext} from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Login from '../pages/Login/Login'
import {Auth} from '../Context/AuthContext'


export default function access(allowed) {
    if (allowed) {
        return (
            <Switch>
                <Route path="/" exact>
                <Login />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Redirect to="/login" />
        </Switch>
    )
}
