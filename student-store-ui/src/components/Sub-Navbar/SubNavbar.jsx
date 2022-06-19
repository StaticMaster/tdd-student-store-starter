import * as React from "react";
import "./SubNavbar.css";

export default function SubNavbar(props) {
  function TextChange(event) {
    console.log(event.target.value);
    props.SearchData(event.target.value);
  }
  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={TextChange}
            ></input>
          </div>
        </div>
      </div>
      <div className="links">
        <span className="help">
          <i className="material-icons">help</i>
          "Help"
        </span>
        <div className="cart">
          <a href="/">
            "My Cart"
            <i className="material-icons">shopping_cart</i>
          </a>
        </div>
      </div>
    </nav>
  );
}