import * as React from "react";
import "./ShoppingCart.css";


<h3>Shopping Cart</h3>


export default function ShoppingCart(props) {
  let totalAmount = 0;
  {console.log (props.shoppingCart)}
  return (
    <div className="shopping-title">
     <h3>Shopping Cart</h3>
    <div className="cart">
      <div className="list">
        <div className="top">
          <div className="name">
            <h4>Name</h4><br></br>
          </div>
          <div>
            <h4>Quantity</h4>
          </div>
          <div>
            <h4>Price</h4>
          </div>
          <div>
            <h4>Cost</h4>
          </div>
          <div className="bottom">{
         props.shoppingCart?.map((item)=>{
        let found =props.allProducts.find((product)=>
        {
            return item.id == product.id;
        });
    totalAmount += item.quantity * found.price;
    return (<ProductRow key ={found.id} product={found} shoppingCart={props.shoppingCart}/>)


         })}
          </div>
        </div>
        <div className="prices">
         <div className="subtotal">
         <div><h5>Subtotal</h5></div>
         <h4>{totalAmount * 0.0875}</h4>
         <h4>{totalAmount * 1.0875} </h4>
         </div>
        </div>
      </div>
    </div>
    </div>
 ) }
 (function ProductRow (props) {
let name = props. product.name;
let quantity;
props.shoppingCart.forEach((item)=>{
if (props.product.id == item.id){
 quantity = item.quantity;
}
})

let cost = quantity * props.product.price;
   
return (

<div className="productRow">
<div className="name"><p>{name}</p></div>    
<div className="quantity"><p>{quantity}</p></div>   
<div className="price"><p>${(props.product.price).toFixed(2)}</p></div>   
<div className="cost"><p>${(cost).toFixed(2)}</p></div>   
</div>

)
}
  );