import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import './Login.css';
import logo from "../assets/Group.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/home'); 
  };

  const handleJumpRightIn = () => {
    navigate("/LoginForm"); 
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
          <div className="item">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Write your name' />
          </div>
          <div className="item">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Write your email' />
          </div>
          <div className="item">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Write your password' />
          </div>
          <div className='sam'>
            <div className="ligne">
              <input type="checkbox" /> <p>I accept the terms & conditions</p>
            </div>
            <button 
              style={{ backgroundColor: "#6100C2", color: "white" }} 
              onClick={handleSignUp} 
            >
              SIGN UP
            </button>
          </div>
          <div className='sam3'>
            <p>Own an account?</p>
            <button onClick={handleJumpRightIn}>JUMP RIGHT IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
