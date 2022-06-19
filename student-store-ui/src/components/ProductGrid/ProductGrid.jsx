import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {props.products.map((item) => {
        return <ProductCard item={item} key={item.id} />;
      })}
    </div>
  );
}