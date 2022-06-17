import * as React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Home from "../Home/Home";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="link">
        {/* <Link to="/"> */}
        <img
          src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
          alt="main logo"
          height="50px"
          width="50px"
        />
        {/* </Link> */}
      </div>
      <div className="links"></div>
      <ul>
        <li to="/">
          {/* <Home/> */}
        </li>
        {/* <li to="/about"><About/></li> */}
        {/* <li to="/contact"><Contact/></li> */}
        {/* <li to="/buy now"><BuyNow/></li> */}
      </ul>
      {/* <NavLink className="navbar" activeClassName="active-navbar" to="/" exact>
        <Logo>
          <NavLink
            className="logo"
            activeClassName="logo"
            to="/"
            exact
          ></NavLink>
        </Logo>
      </NavLink> */}
      <p>Navbar</p>
    </nav>
  );
}
