import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  const productData = [
    {
        "productId": 1,
        "productName": "Fridge",
        "productDescription": "Bimal",
        "price": 0.0,
        "listedDate": null,
        "updatedDate": null,
        "categoryDto": null,
        "personDto": null
    },
    {
        "productId": 2,
        "productName": "Phone",
        "productDescription": "Bimal",
        "price": 0.0,
        "listedDate": null,
        "updatedDate": null,
        "categoryDto": null,
        "personDto": null
    },
    {
        "productId": 3,
        "productName": "manish product",
        "productDescription": "",
        "price": 0.0,
        "listedDate": null,
        "updatedDate": null,
        "categoryDto": null,
        "personDto": null
    },
    {
        "productId": 4,
        "productName": "mobile Gadget ",
        "productDescription": "Bimal",
        "price": 0.0,
        "listedDate": null,
        "updatedDate": null,
        "categoryDto": null,
        "personDto": null
    },
    {
        "productId": 5,
        "productName": "television Gadget ",
        "productDescription": "",
        "price": 0.0,
        "listedDate": null,
        "updatedDate": null,
        "categoryDto": null,
        "personDto": null
    },
    {
        "productId": 6,
        "productName": "Cocaine ",
        "productDescription": "This things are for the nasedi people",
        "price": 200.8,
        "listedDate": "2024-04-28T06:16:55.692+00:00",
        "updatedDate": "2024-04-28T06:16:55.693+00:00",
        "categoryDto": null,
        "personDto": null
    }
]

  useEffect(() => {
    async function fetchProductData() {
      const response = await axios.get('http://localhost:8080/api/product/');
      setProducts(response.data);
    }
    fetchProductData();
  }, []);

  const handleClick = () => {
    console.log("Add Button Clicked")
  }

  return (
    <div className="w-3/5 mx-auto mt-44">
       <div className='cursor-pointer' onClick={handleClick}>
       <Link to={"/addProduct"} className='flex justify-center items-center text-2xl'><IoAdd size={80}/> Add Product</Link> 
       </div>
       

     <ul>
      {productData && productData.map(product => (
       <li key={product.productId}><ProductCard productData={product}/> </li> 

      ))}
      </ul>
    </div>
  );
};

export default AllProduct;