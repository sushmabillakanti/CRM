import React from 'react';
 
const Register = () => {
    return (
        <div className='container'>
            <form action="">
                <h1>SignUp</h1>
                <div className="input-box">
                    <input className="form-control" type="text" placeholder='FirstName' required />
                </div>
                <br/>
                <div className="input-box">
                    <input className="form-control" type="text" placeholder='LastName' required />
                </div>
                <br/>
                <div className="input-box">
                    <input className="form-control" type="text" placeholder='Username' required />
                </div>
                <br/>
                <div className="input-box">
                    <input className="form-control" type="email" placeholder='Email' required/>
                </div>
                <br/>
                <div className="input-box">
                <input className="form-control" type="password" placeholder='Password' required />
                </div>
                <br/>
                <div className="input-box">
                <input className="form-control" type="password" placeholder='Re-type Password' required />
                </div>
                <br/>
                <select className='form-select'>
                    <option>Select role</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Agent</option>
                    <option>Customer</option>
                </select>
                <br/>
                <button className="btn btn-primary" type="submit">Login</button>
 
            </form>
            </div>
    );
};
 
export default Register;