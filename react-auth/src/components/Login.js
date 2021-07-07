import React, { useState } from 'react';
import axios from 'react';


const initialCredentials = {
    username: '',
    password: ''
}

function Login() {
    const [credentials, setCredentials] = useState(initialCredentials);

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/auth/login', credentials)
            .then(res => {
                console.log(res);
                setCredentials(res.data);
            })
            .catch(err => {
                console.log('error', err);
            })
    };

    function handleChange(e) {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        )
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="username or email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>

    )
};


  export default Login;