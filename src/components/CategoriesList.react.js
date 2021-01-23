import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";

export default function ProductCategories() {
    const [hasError, setErrors] = useState(false);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      res
        .json()
        .then(res => setProducts(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  },[]);

    
    return (
    <>
    <div>
      <span>{JSON.stringify(products[0])}</span>
      <ul>{products && products.map((product, index)=> {return (
      <li 
      key={index}>
          <img
            width={'100px'}
            height={'100px'}
            src={product.image}
          />
      </li>) })}</ul>

      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>

  
    </>
          
        
    )
}
