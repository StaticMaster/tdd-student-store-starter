import * as React from "react";
import "./Sidebar.css";
import "../ShoppingCart/ShoppingCart"

export default function Sidebar({isOpen, handleOnToggle}) {
  return (
    <section className={"sidebar " + (isOpen ? "open" : "closed")}>
      <div className="side-nav" id="side-menu">
      <a href="#" className = "btn-close" onClick = {() => {
       handleOnToggle()

      }}>&times;</a>
     
      </div>
    </section>
  )
}


 // document.querySelector("#side-menu").style.width = "0";
        // document.querySelector(".home").style.marginLeft = "0";
        // document.querySelector(".navbar-nav").style.marginLeft = "0";
