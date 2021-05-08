
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { url } from '../default'
import Message from '../include/messages'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logged, setLogged] = useState("none")
    const onSubmit = data => {
        axios.get(url + "/sanctum/csrf-cookie").then(response => {
            axios.post(url + '/api/login', data)
             .then(res => console.log(res))
             .catch(error => {
                 if (error.response.status == 401) {
                    setLogged("block");
                 }
             })
        })
    }
    return (
        <div className="container">
            <h2>Zaloguj się</h2>
            <Message message="Podany użytkownik nie istnieje, albo hasło jest nieprawidłowe" display={logged} />
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <button role="submit">Zaloguj się</button>
                </div>
            </form>
        </div>
    );
}

export default Register;