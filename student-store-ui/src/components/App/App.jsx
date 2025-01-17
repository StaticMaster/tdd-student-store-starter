import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Header from "../Header/Header"
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState} from "react";
import axios from "axios"
import Hero from "../Hero/Hero"

export default function App (){

 const [isOpen, setIsOpen] = useState(false)
 const handleOnToggle = () => {
  setIsOpen(!isOpen)
}

const [shoppingCart, setshoppingCart] = useState([])
const URL="https://codepath-store-api.herokuapp.com/store" 
const [products,setProducts]= useState([])
async function getData(){
const responseData= await axios.get(URL).then((response)=>{
  return response.data.products
})
setProducts([...responseData])

}

useEffect(()=> {
getData();
}, [])

async function SearchData(searchValue){
  const responseData= await axios.get(URL).then((response)=>{
    return response.data.products
  })
  let array=[]
  for (let i=0;i<16;i++){
  if (responseData[i].name.toLowerCase().includes(searchValue))
  array.push(responseData[i])
  
  }
  setProducts(array)
   
}

async function getDataCategory(category){
const responseData = await axios.get(URL).then((response)=> {
return response.data.products
});

let array = [];
for (let i=0; i< responseData.length; i++){
  if (responseData[i].category == category) array.push(responseData[i]);
}
setProducts(array);
}
  
const handleAddItemToCart = (productId)=>
{
  let newCart = [...shoppingCart]
  let productObj = {
    itemId:productId, 
    quantity: 1
  }

  if (newCart.length == 0) newCart.push(productObj)

  for (let i=0; i<newCart.length;i++){
    if (newCart[i].itemId == productId) newCart[i].quantity+=1
    else if (i + 1 == newCart.length) newCart.push(productObj)

  }

setshoppingCart(newCart)

}
console.log(shoppingCart)

const handleRemoveItemToCart =(productId) =>
{
let newCart =[]
let productObj = {
  itemId:productId, 
  quantity: 1
} 
    for (let i=0; i<shoppingCart.length;i++){
      if (shoppingCart[1].itemId ==productId){
       if(shoppingCart[i].quantity>1){
          productObj = {
            itemId:productId, 
            quantity: shoppingCart[i].quantity-1
          }
          newCart.push(productObj)
        }
      }
      else newCart.push(shoppingCart[i])
    }
    setshoppingCart(newCart)


}







// <BrowserRouter basname="routes">
// <Link to = "/"/>
// <Link to = "/products/:productId"/>
// <Link to  = "*"/>

// </BrowserRouter>

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar handleOnToggle={handleOnToggle}  />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart} products={products}/>
          <Home products={products} SearchData={SearchData} getDataCategory={getDataCategory} handleAddItemToCart={handleAddItemToCart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}