import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://api/product/')
      .then(response => {
        console.log(response.data);
        // setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="product-section">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
         <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingProductPage;