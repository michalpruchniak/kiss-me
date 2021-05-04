import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { url } from '../default'

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.name)
        axios.post('http://localhost:8000/api/register',  data  )
             .then(res => console.log(res))
    }
    return (
        <div className="container">
            <h2>Zrejestruj się</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input_row">
                    <label htmlFor="name">Imię</label>
                    <input
                        id="name"
                        type="string"
                        placeholder="Twoje imię"
                        {...register("name", { required: true, maxLength: 25, minLength: 4 })}
                    />
                    {errors.name && errors.name.type === "required" && <span>Pole imię jest wymagane</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Minimalna liczba znaków wynosi 4</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Maksymalna liczba znaków wynosi 25</span>}
                </div>
                <div className="input_row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        placeholder="example@example.com"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && errors.email.type === "required" && <span>Pole email jest wymagane</span>}
                    {errors.email && errors.email.type === "pattern" && <span>To nie jest prawidłowy format adresu email</span>}
                </div>
                <div className="input_row">
                    <label htmlFor="password">Hasło</label>
                    <input 
                        id="password"
                        type="password"
                        {...register("password", { required: true, minLength: 5, maxLength: 45 })}
                    />
                    {errors.password && errors.password.type === "required" && <span>Pole hasło jest wymagane</span>}
                    {errors.password && errors.password.type === "minLength" && <span>Minimalna liczba znaków wynosi 5</span>}
                    {errors.password && errors.password.type === "maxLength" && <span>Maksymalna liczba znaków wynosi 45</span>}
                </div>
                <div className="input_row">

                    <label htmlFor="password_confirmation">Powtórz hasło</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        
                    />
                </div>
                <div className="input_row">
                    <button role="submit">Zarejestruj się</button>
                </div>
            </form>
        </div>
    );
}

export default Register;