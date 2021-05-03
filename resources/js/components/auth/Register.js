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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">name</label>
                <input 
                    id="name"
                    type="string"
                    {...register("name", { required: true, maxLength: 25, minLength: 4 })}
                />
                {errors.name && errors.name.type === "required" && <span>Pole name jest wymagane</span>}
                {errors.name && errors.name.type === "minLength" && <span>Minimalna liczba znaków wynosi 4</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Maksymalna liczba znaków wynosi 25</span>}
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && errors.email.type === "pattern" && <span>To nie jest prawidłowy format adresu email</span>}
                <label htmlFor="password">Hasło</label>
                <input 
                    id="password"
                    type="password"
                    {...register("password", { required: true, minLength: 5, maxLength: 45 })}
                />
                {errors.password && errors.password.type === "required" && <span>Pole hasło jest wymagane</span>}
                {errors.password && errors.password.type === "minLength" && <span>Minimalna liczba znaków wynosi 5</span>}
                {errors.password && errors.password.type === "maxLength" && <span>Maksymalna liczba znaków wynosi 45</span>}

                <label htmlFor="password_confirmation">Powtórz hasło</label>
                <input
                    id="password_confirmation"
                    type="password"
                    
                />
                <button role="submit">Zarejestruj</button>
            </form>
        </div>
    );
}

export default Register;