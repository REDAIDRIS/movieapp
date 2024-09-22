import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { Outlet } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoEllipseOutline } from "react-icons/io5";
import './Alo.css';
import { IoIosLogOut } from "react-icons/io";
import { IoFilmOutline } from "react-icons/io5";
import { CiHeart, CiCalendar } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { FiUsers, FiMessageCircle, FiSliders } from "react-icons/fi";
import logo from "../assets/Group.png"
const Alo = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const options = ["movies", "series", "Document"];
    const optionsDrawer = [
        { label: "Home", icon: <IoFilmOutline /> },
        { label: "Favourites", icon: <CiHeart /> },
        { label: "Trending", icon: <IoIosTrendingUp /> },
        { label: "Coming soon", icon: <CiCalendar /> },
        { label: "Community", icon: <FiUsers /> },
        { label: "Social", icon: <FiMessageCircle /> },
        { label: "Settings", icon: <FiSliders /> },
        { label: "Logout", icon: <IoIosLogOut /> },
      ];
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='all'>
            <div className={`drawer ${isDrawerOpen ? 'show' : ''}`}>
            <img src={logo} alt="Logo" />
            {optionsDrawer.map((item, index) => (
            
                <p key={index}>{item.icon} {item.label}</p>
                
           
        ))}
            </div>

            <div className='AppBar' style={{ marginLeft: isDrawerOpen ? '250px' : '0' }}>
                <button onClick={toggleDrawer}>
                    <GiHamburgerMenu />
                </button>
                <div className='nav_bar'>
                    <div className="left">
                        {options.map((ele, index) =>
                            <p key={index}>{ele}</p>
                        )}
                    </div>
                    <div className="right">
                        <CiSearch />
                        <IoIosNotificationsOutline />
                        <IoEllipseOutline />
                    </div>
                </div>
            </div>

            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};

export default Alo;
