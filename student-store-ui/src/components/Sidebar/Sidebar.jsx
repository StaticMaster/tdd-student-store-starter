import * as React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="side-nav" id="side-menu">
      <a href="#" className = "btn-close" onClick = {() => {
        document.querySelector("#side-menu").style.width = "0";
        document.querySelector(".home").style.marginLeft = "0";
        document.querySelector(".navbar-nav").style.marginLeft = "0";

      }}>&times;</a>
    
      </div>
    </section>
  )
}



