import React from 'react';
import ReactDOM from 'react-dom';

import Register from './Register'
import Login from './Login'

import Nav from './Nav'
import './style.scss'


function Auth() {
    return (
        <div className="container">
            <Nav />
            <div className="auth__container">
                <div className="auth__img">
                    <h2>Zacznij randkować już dzisiaj</h2>
                </div>
                <div className="auth__form__container">
                    <div className="auth__form">
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;

if (document.getElementById('auth')) {
    ReactDOM.render(<Auth />, document.getElementById('auth'));
}
