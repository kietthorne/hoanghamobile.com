import React, { useContext, useEffect, useState } from "react";
import ProductsItem from "@Components/ProductsItem";
import "@Assets/less/products.less";
import Search from "./Search";
import AppContext from "@/context/AppContext";
import { dataProduct } from "@/api/data";

function Products() {
  const [product, setProducts] = useState();
  const [productsSort, setProductsSort] = useState();

  console.log(dataProduct);
  return (
    <div className="Product-list">
      {dataProduct.products.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.thumbnail}></img>
            <p>{item.name}</p>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
