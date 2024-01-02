// Login.js
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('userToken', data.token);
                    window.location.href = '/'; // Redirect to home after login
                } else {
                    alert('Logowanie nieudane: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Błąd podczas logowania:', error);
            });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => navigate('/register')} style={{ marginLeft: "10px" }}>Register</button>
        </div>
    );
};

export default Login;
