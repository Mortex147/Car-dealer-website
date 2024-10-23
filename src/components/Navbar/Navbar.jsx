import React, { useState } from "react";
import "./Navbar.css";
//image import from assets
import logo from "../../assets/logo.png";
//React icons import
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  //statement to hold thenavbar state
  const [navbar, setNavbar] = useState("navbar");
  // functon to  show nav on sm all screens
  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };
  //function to remove nav bar
  const removeNavbar = () => {
    setNavbar("navbar removeNavbar");
  };

  return (
    <div className="header">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className={navbar}>
        <ul className="menu">
          <li className="listItem">
            <a href="" className="link">
              Used cars
            </a>
          </li>
          <li className="listItem">
            <a href="" className="link">
              New cars
            </a>
          </li>
          <li className="listItem">
            <a href="" className="link">
              Auction cars
            </a>
          </li>
          <li className="listItem">
            <a href="" className="link">
              Sell
            </a>
          </li>
        </ul>
        {/* Close icon for small screens */}
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
