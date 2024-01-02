// Register.js
import React, { useState } from 'react';
import './Register.scss';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Dodaj więcej stanów zgodnie z potrzebami (np. email, potwierdzenie hasła itp.)

    const handleRegister = () => {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Dodaj więcej pól zgodnie z API
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Rejestracja pomyślna!');
                    window.location.href = '/login'; // Redirect to login after successful registration
                } else {
                    alert('Rejestracja nieudana: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Błąd podczas rejestracji:', error);
            });
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {/* Formularz rejestracji */}
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
            {/* Dodaj więcej pól zgodnie z potrzebami */}
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
