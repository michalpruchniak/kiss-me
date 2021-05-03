import React from 'react';
import ReactDOM from 'react-dom';

import Register from './Register'
import Login from './Login'

import Nav from './Nav'


function Auth() {
    return (
        <div className="container">
            <Nav />
            <div className="auth__container">
                <div className="auth__img"></div>
                <div className="auth__form">
                    <Login />
                    <Register />
                </div>
            </div>
        </div>
    );
}

export default Auth;

if (document.getElementById('auth')) {
    ReactDOM.render(<Auth />, document.getElementById('auth'));
}
