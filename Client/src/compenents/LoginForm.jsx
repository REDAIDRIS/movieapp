import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Group.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import './Login.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        
        navigate('/'); 
    };

    return (
        <div className="container">
            <div className='box'>
                <img src={logo} alt="Logo" />
                <div className="buttons">
                    <button type="button"><FcGoogle /> Sign up with Google</button>
                    <button type="button"><FaGithub /> Sign up With GitHub</button>
                </div>
                <div className='box2'>
                    <form onSubmit={handleSubmit}>
                        <div className="item">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Write your email'
                                required
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Write your password'
                                required
                            />
                        </div>
                        <div className='sam'>
                            <div className="ligne">
                                <input type="checkbox" /> <p>I accept the terms & conditions</p>
                            </div>
                            <button 
                                type="submit" 
                                style={{ backgroundColor: "#6100C2", color: "white" }}
                            >
                                SIGN IN
                            </button>
                        </div>
                    </form>
                    <div className='sam3'>
                        <p>Own an account?</p>
                        <button onClick={() => navigate('/login')}>JUMP RIGHT IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
