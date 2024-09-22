import React from 'react';
import logo from "../assets/Group.png";
import './Home.css';
import { IoIosLogOut } from "react-icons/io";
import { IoFilmOutline } from "react-icons/io5";
import { CiHeart, CiCalendar } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { FiUsers, FiMessageCircle, FiSliders } from "react-icons/fi";

const Home = () => {
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
  return (
    <div className='container'>
      <img src={logo} alt="Logo" />
      <p><IoFilmOutline /> Home</p>
      <p><CiHeart /> Favourites</p>
      <p><IoIosTrendingUp /> Trending</p>
      <p><CiCalendar /> Coming soon</p>
      <p><FiUsers /> Community</p>
      <p><FiMessageCircle /> Social</p>
      <p><FiSliders /> Settings</p>
      <p><IoIosLogOut /> Logout</p>
    </div>
  );
};

export default Home;
