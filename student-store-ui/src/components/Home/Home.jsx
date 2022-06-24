import * as React from "react"
import "./Home.css"
import SubNavbar from "../Sub-Navbar/SubNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
export default function Home(props) {
  
  console.log("1",props.products)
  return (
    <div className="Home">

    <SubNavbar SearchData={props.SearchData}/>
     <ProductGrid products={props.products}/> 

<div className="categories">
<h3 onClick={()=>{props.getDataCategory("food")}}>Food</h3>
</div>



<div className="about" id="About">
<h2>About</h2>
<p>
The codepath student store offers great products at great prices from a great team and for a great cause.
We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
All proceeds go towards bringing high quality CS education to college students around the country.  
</p>


</div>

  <div className="contact" id="Contact">
 <h2>Contact</h2>
<p>Email: code@path.org</p>
<p> Phone: 1-800-CODEPATH</p>
<p>Socials:Twitter, Instagram</p>
<p>Address:123 Fake Street, San Francisco, CA </p>
  </div>
  

      <p>Home</p>
    </div>
  )
}
