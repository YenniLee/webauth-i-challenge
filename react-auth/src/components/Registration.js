import React, { useState } from 'react';
import axios from 'axios';


const initialCredentials = {
    username: '',
    password: '',
}

function Registration() {

    const [credentials, setCredentials] = useState(initialCredentials);

    function handleChange(e) {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        )
    };

    const handleSubmit = e => {
        axios
            .post('http://localhost:5000/api/auth/register', credentials)
            .then(res => {
                console.log(res);
                setCredentials(res.data);
            })
            .catch(err => {
                console.log('error', err);
            })
    };


    return (
        <div>
            <h3>Create an Account</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
                    onChange={handleChange}
                />
        
                <button>Sign Up</button>
            </form>
        </div>
    )
}

  export default Registration;