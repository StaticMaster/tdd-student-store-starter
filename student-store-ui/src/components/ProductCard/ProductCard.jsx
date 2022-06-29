import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ item,handleAddItemToCart, handleRemoveItemToCart }) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + item.id}>
          <img
            src={item.image}
            alt="product cover"
            loading="lazy"
            height="267px"
            width="267px"
          />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{item.name}</p>
          <p className="product-price">${item.price}</p>
        </div>
      </div>
      <div className="actions">
        <div className="buttons">
          <button className="add" onClick={()=>{
            handleAddItemToCart(item.id)
          }}>
          <i className="material-icons">add</i>
          </button>
          <button className="remove">
          <i className="material-icons" onClick={()=>{
              handleRemoveItemToCart(item.id)
          }}>remove</i>
          </button>
        </div>
      </div>
    </div>
  );
}
