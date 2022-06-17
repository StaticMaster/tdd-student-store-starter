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


export default function App (){

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


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar   />
          <Sidebar  />
          <Home products={products} />
        </main>
      </BrowserRouter>
    </div>
  )
}