import * as React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="wrapper">
        <button className="toggle-button-open">
          <i className="material-icons md-48">arrow_foward</i>
        </button>
        <div className="shopping cart">
          <div className="open">
            <h3 className="">
              "Shopping Cart"
              <span className="button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
            </h3>
            <div className="notification">
              No items added to cart yet. Start shopping now!
            </div>
            <div className="checkout">
              <h3>"Payment Info"
              <span className="button">
              <i className="material-icons md-48">monetization_on</i>
              </span>
              </h3>

              {/* sidebar closed code */}
              <div className="input-field"></div>
              <section className="sidebar closed">
                <div className="wrapper">
                <button className="toggle-button-closed">
                 <i className="material-icone md-48">arrow_forward</i> 
                </button>
                </div>
              // </section>
            </div>
          </div>
        </div>
      </div>

      <p>Sidebar</p>
   </section>
  )
}
