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
    </nav>
  );
}
