import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
// import WORKUS from "../page/WORKUS";
function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <div>
          <h3 className="mentor">MENTOR</h3>
        </div>
        <Link to="/"> HOME </Link>
        <Link to="/workwithuS">WORK WITH US</Link>
        <Link to="/CareerCounseling"> CAREER COUNSELLING </Link>
        <Link to="/Aboutus"> ABOUT US</Link>
        <Link to="/Postadd"> POST ADD </Link>
      </div>
    </div>
  );
}

export default Navbar;
