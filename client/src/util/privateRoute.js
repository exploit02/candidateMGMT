import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// import session from './../utils/sessionStore'
const isLoggedIn =JSON.parse(localStorage.getItem('isLoggedIn'))

const PrivateRoute = ({ component: Component, ...rest })=>{
    console.log('here');
    return(
        <Route 
            {...rest}
                render = {props => isLoggedIn ? (<Component {...props}/>) : (<Redirect to={{ pathname: '/'}}/>)}/>
    )

}

export default PrivateRoute