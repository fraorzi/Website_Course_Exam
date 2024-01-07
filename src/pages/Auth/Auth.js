// Auth.js
import React, { useState } from 'react';
import './Auth.scss';

function Auth() {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Dla rejestracji
    const [confirmPassword, setConfirmPassword] = useState(''); // Dla rejestracji

    const toggleAuthMode = () => {
        setIsLoginActive(!isLoginActive);
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Zapobiegaj domyślnej akcji formularza
        // TUTAJ: Dodaj walidację danych

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
                window.location.href = '/'; // Przekieruj na stronę główną po zalogowaniu
            } else {
                alert('Logowanie nieudane: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Błąd podczas logowania:', error);
        });
    };

    const handleRegister = (e) => {
        e.preventDefault(); // Zapobiegaj domyślnej akcji formularza
        // TUTAJ: Dodaj walidację danych

        if(password !== confirmPassword){
            alert("Hasła nie są takie same");
            return;
        }

        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }), // Dodaj więcej pól zgodnie z API
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Rejestracja pomyślna!');
                window.location.href = '/login'; // Przekieruj na logowanie po pomyślnej rejestracji
            } else {
                alert('Rejestracja nieudana: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Błąd podczas rejestracji:', error);
        });
    };

    return (
        <div className="auth-container">
        <div className={`container ${isLoginActive ? "" : "right-panel-active"}`} id="container">
            {/* Rejestracja */}
            <div className="form-container sign-up-container">
                {/* Formularz rejestracji */}
            </div>

            {/* Logowanie */}
            <div className="form-container sign-in-container">
                {/* Formularz logowania */}
            </div>

            {/* Overlay */}
            <div className="overlay-container">
                <div className="overlay">
                    {/* Panel Overlay dla Logowania */}
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={toggleAuthMode}>Sign In</button>
                    </div>

                    {/* Panel Overlay dla Rejestracji */}
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" onClick={toggleAuthMode}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
    );
}

export default Auth;
