import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAdress] = useState("");
let navigate = useNavigate()
    const collectData = async () => {
        console.warn(name, email, password, address);
        let result = await fetch('http://localhost:5000/register', {
            'method': 'post',
            'headers': { 'Content-Type': 'application/json'},
            'body': JSON.stringify({
                name: name,
                email: email,
                password: password,
                address: address
            })
        })
        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/')
    }
    return (
        <div>
            <h1>
                Register Your Profile

            </h1>
            <div className="card mx-auto" style={{ width: "30rem", }} >
                <div className="card-body">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="text" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control"  id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="text" className="form-label">Address</label>
                            <input type="text" className="form-control"  id="address" onChange={(e) => setAdress(e.target.value)} />
                        </div>



                        <div className="col-12">
                            <button type="button" className="btn btn-primary" onClick={collectData}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Signup;