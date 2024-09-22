import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

function Splash  ()  {

    const navigate = useNavigate()
  return (
    <div
    style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
       color: "white",
       gap:"16px",
  
    }}
    >
    <div className="logo">
    <img src={logo} alt="" />
    <p>Enjoy the newest movies</p>
    </div>
    <button style={{
        backgroundColor:"#6100C2",
        color:"white",
    }}
    onClick={()=> navigate('/login')}
    
    > log in </button>
    <p>No account ? <a href="">Sign up</a></p>
    </div>
  
  )
}

export default Splash