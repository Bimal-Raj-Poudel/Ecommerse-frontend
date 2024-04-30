import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function EditProduct({handleEditClick, sendData}) {

    const [formData, setFormData] = useState({
        productId: 6,
        productName: "Cocaine ",
        productDescription: "This things are for the nasedi people",
        price: 200.8,
        });

  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleChildData(){
    sendData("hello")
  }
  
  const handleClick = () => {
    handleEditClick();  
  }

  return (
    <div className="w-2/5 h-3/5 bg-slate-red relative left-64">
      <div className= " bg-slate-300 p-4 rounded-2xl ">
        <span className="absolute top-4 right-4 cursor-pointer" onClick={handleClick()}><ImCross /></span>
      
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-2xl font-semibold ">
          <label htmlFor="productName">Product Name:</label>
          <input
            id="productName"
            type="text"
            value={formData.productName}
            onChange={handleChange}
            name="productName"
            className="focus:outline-none rounded-xl p-2"
          />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            type="text"
            value={formData.productDescription}
            onChange={handleChange}
            name="productDescription"
            className="focus:outline-none overflow-hidden rounded-xl p-2"
          />

          <label htmlFor="productPrice">Product Description:</label>
          <input
            id="productPrice"
            type="text"
            value={formData.price}
            onChange={handleChange}
            name="price"
            className="focus:outline-none rounded-xl p-2"
          />

          <button type="submit" className="bg-green-500 rounded-md p-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

 export default EditProduct;
