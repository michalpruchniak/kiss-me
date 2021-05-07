import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { url } from '../default'
import Message from '../include/messages'

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
                    {errors.name && errors.name.type === "required" && <Message message="Pole imię jest wymagane" />}
                    {errors.name && errors.name.type === "minLength" && <Message message="Minimalna ilość znaków wynosi 4" />}
                    {errors.name && errors.name.type === "maxLength" && <Message message="Maksymalna liczba znaków wynosi 25" />}
                </div>
                <div className="input_row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        placeholder="example@example.com"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && errors.email.type === "required" && <Message message="Pole email jest wymagane" />}
                    {errors.email && errors.email.type === "pattern" && <Message message="To nie jest prawidłowy format adresu email" />}
                </div>
                <div className="input_row">
                    <label htmlFor="password">Hasło</label>
                    <input 
                        id="password"
                        type="password"
                        {...register("password", { required: true, minLength: 8, maxLength: 45 })}
                    />
                    {errors.password && errors.password.type === "required" && <Message message="Pole hasło jest wymagane" />}
                    {errors.password && errors.password.type === "minLength" && <Message message="Minimalna ilość znaków wynosi 8" />}
                    {errors.password && errors.password.type === "maxLength" && <Message message="Maksymalna ilość znaków wynosi 45" />}
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