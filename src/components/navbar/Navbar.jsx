import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AvatarImg from "../../images/avatar.jpg";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div className="navbar-logo">
          {/* <img src="" alt="" srcset="" /> */}
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8A3FFC"
              d="M43.2,-34.3C57.7,-16.2,72.6,1.9,68.2,13.4C63.9,24.9,40.3,29.9,20.2,38C0.2,46.1,-16.5,57.4,-25.8,53.1C-35.1,48.7,-37.1,28.8,-38,12.3C-38.9,-4.2,-38.6,-17.4,-32.1,-33.7C-25.6,-50,-12.8,-69.4,0.8,-70C14.3,-70.6,28.6,-52.4,43.2,-34.3Z"
              transform="translate(100 100)"
            />
            <image x="50" y="50" width="100" height="100" href={AvatarImg} />
          </svg>
          <div className="logo-header">Sachin Kaythamwar</div>
        </div>
        <div className="navbar-nav">
          <ul className="navbar-list-left">
            <li className="navbar-list-item">
              <Link to={"/home"} className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link to={"/about"} className="navbar-link">
                About
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link to={"/projects"} className="navbar-link">
                Project
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link to={"/contact"} className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-list-right">
            <li className="navbar-list-item">
              <Link to={"/resume"} className="navbar-link">
                Resume
              </Link>
            </li>
            <li className="navbar-list-item">
              <i class="fa-solid fa-large fa-sun"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
