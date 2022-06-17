import * as React from "react"
import "./Home.css"
import SubNavbar from "../Sub-Navbar/SubNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
export default function Home(props) {
  
  console.log("1",props.products)
  return (
    <div className="Home">

    <SubNavbar/>
     <ProductGrid products={props.products}/> 

   {/* <ul> {
   
      props.product.map((element)=>(<img src={element.image}></img>))
    }
    </ul> */}
  

      <p>Home</p>
    </div>
  )
}
