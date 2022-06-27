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
      
{/* <div className="name"> */}
<form>
  <label for="username">Name:</label><br></br>
  <input type="text" id="name" name="Student Name"></input><br></br>
  <label for="email">Email:</label><br></br>
  <input type="text" id="email" name="Email"></input><br></br>
  <label for="checkbox" className="box">I agree to the terms and conditions</label>
  <input type="checkbox" id="checkbox"></input><br></br> 
</form>
 
{/* </div> */}



      <div className="checkout">
      <h3>Checkout Info </h3>
      <p>
        A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
      </p>
     </div>
      </div>
    </section>
  )
}


 // document.querySelector("#side-menu").style.width = "0";
        // document.querySelector(".home").style.marginLeft = "0";
        // document.querySelector(".navbar-nav").style.marginLeft = "0";
