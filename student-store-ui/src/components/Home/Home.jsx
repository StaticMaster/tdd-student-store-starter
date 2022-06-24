import * as React from "react"
import "./Home.css"
import SubNavbar from "../Sub-Navbar/SubNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"

export default function Home(props) {
  
  console.log("1",props.products)
  return (
    <div className="Home">

    <SubNavbar SearchData={props.SearchData}/>
    <Hero/>
<div className="buttons">
  
<div className="categories">
<button className="button"><h3 onClick={()=>{props.getDataCategory("food")}}>Food</h3></button>
</div>

<div className="categories">
<button className="button"><h3 onClick={()=>{props.getDataCategory("tech")}}>Tech</h3></button>
</div>

<div className="categories">
<button className="button"><h3 onClick={()=>{props.getDataCategory("clothing")}}>Clothing</h3></button>
</div>

<div className="categories">
<button className="button"><h3 onClick={()=>{props.getDataCategory("accessories")}}>Accessories</h3></button>
</div>
</div> 

<ProductGrid products={props.products}/> 

<div className="about" id="About">
<h2>About</h2>
<p>The codepath student store offers great products at great prices from a great team and for a great cause.We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
<p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
<p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
</p>
</div>

  <div className="contact" id="Contact">
 <h2>Contact</h2>
<p>Email: code@path.org</p>
<p> Phone: 1-800-CODEPATH</p>
<p>Socials:Twitter, Instagram</p>
<p>Address:123 Fake Street, San Francisco, CA </p>
  </div>
  

    </div>
  )
}
