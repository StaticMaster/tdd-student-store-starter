import * as React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Home from "../Home/Home";
// import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Navbar() {
  return (
    <nav className="navbar">

<a href="#" onClick = {()=>{
          document.querySelector("#side-menu").style.width = "550px";
          document.querySelector(".home").style.marginLeft = "550px";
          document.querySelector(".navbar-nav").style.marginLeft = "550px";
    }}>
      <svg
        className="cart-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      </a>

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
