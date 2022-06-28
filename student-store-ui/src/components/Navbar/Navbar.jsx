import * as React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Navbar() {
  return (
    <nav className="navbar">


      <div className="link">
        {/* <Link to="/"> */}
        <img
          src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
          alt="main logo"
          height="50px"
          width="50px"/>
       </div>
       
      <div className="open-slide">
      <ul className="navbar-nav">
       <center><li><a href="/#">Home</a></li></center>
       <center><li><a href="/#shop">Shop</a></li></center>
       <center><li><a href="/#Contact">Contact Us</a></li></center>
        <center><li><a href="/#About">About</a></li></center>
      </ul>
      </div>
    </nav>
  );
}
