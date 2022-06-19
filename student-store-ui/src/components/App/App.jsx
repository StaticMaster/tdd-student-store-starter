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


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar   />
          <Sidebar  />
          <Home products={products} SearchData={SearchData}/>
        </main>
      </BrowserRouter>
    </div>
  )
}