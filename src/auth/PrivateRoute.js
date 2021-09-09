import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from './useAuth'

export default function PrivateRoute( {component : Component ,...rest}) {
    const auth = useAuth();
    return (
        // {<Route exact ={props.exact} path={props.path} component={props.componen} />}
            <Route {...rest}>
                {auth.user ? (<Component />) : (<Redirect to="/" />)}
            </Route>
    )
}
