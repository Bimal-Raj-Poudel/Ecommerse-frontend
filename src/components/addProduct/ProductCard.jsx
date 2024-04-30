import React, { useState } from 'react';
import EditProduct from './EditProduct';

const ProductCard = ({ productData }) => {

  const [flag, setFlag] = useState(false);

  const handleEditClick = (a) => {
    console.log(a)
    setFlag(!flag);
  } 

  const handleDelete = () => {

  }

  function handleData(result){
    console.log(result)
  }

  return (
    <>
    <div className='m-8'>
    {flag && <EditProduct handleEditClick={handleEditClick} />}
    </div>
     
    <div className="bg-gradient-to-tr from-slate-500  to-slate-800 mt-2 p-2 rounded-lg shadow-md">
      <div className=' flex flex-col font-semibold text-2xl  justify-center items-center'>
      <h2>{productData.productName}</h2>
      {/* <img src={product.image} alt={product.name} /> */}
      <p>{productData.productDescription}</p>
      <p>{productData.price}</p>

      <button className='bg-red-200 rounded-lg p-2 hover:bg-green-400' onClick={handleEditClick}>Edit</button>
      <button className='bg-red-200 rounded-lg p-2 hover:bg-green-400' onClick={handleDelete}>Delete</button>
      </div>
     
    </div>
    </>
  );
};

export default ProductCard;