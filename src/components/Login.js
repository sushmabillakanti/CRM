import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const Login = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [loginMessage, setLoginMessage] = useState('');
    const [messageStyle, setMessageStyle] = useState({ color: 'blue' });
 
    const handleLogin = (evt) => {
        setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
    };
 
    const submitLogin = (evt) => {
        if (loginData.username === 'sonu' && loginData.password === 'sonu') {
            setLoginMessage(`${loginData.username} logged in successfully!`);
            setMessageStyle({ color: 'green' });
        } else {
            setLoginMessage('Invalid credentials.');
            setMessageStyle({ color: 'red' });
        }
        setLoginData({ username: '', password: '' });
        evt.preventDefault();
    };
 
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div>
                    <img height="200px" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1711454026~exp=1711457626~hmac=5b30529a296022df50b0db3d7680f24e50cab2db805b5f67fe1b560469d4f208&w=740"/>
                        <h5 style={messageStyle} className="card-header text-center">Login</h5>
                        <div className="card-body">
                            <form onSubmit={submitLogin}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" id="username" name="username" value={loginData.username} onChange={handleLogin} className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" id="password" name="password" value={loginData.password} onChange={handleLogin} className="form-control" required />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            {loginMessage && <p style={messageStyle}>{loginMessage}</p>}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Login;