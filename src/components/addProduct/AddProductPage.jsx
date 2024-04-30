import React, { useState } from "react";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission...
  };

  return (
    <div className=" flex h-screen w-screen  justify-center bg-gray-100 py-12 px-4">
      <div className="h-3/5  py-3 px-5 items-center justify-center rounded-md border-2px-solid shadow-xl border-gray-100 relative">
        <form onSubmit={handleSubmit}>
          <label htmlFor="productName">
            Product Name:
            <input
              type="text"
              placeholder="Enter the name of your product"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="relative block w-full mx-3 px-4 py-3 border border-gray-300 shadow-black placeholder:font-semibold placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none   focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </label>
          <br />
          <label htmlFor="productDescription">
            Product Description:
            <textarea
              placeholder="Enter the description of your product"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="relative row-span-10 block w-full px-4 py-3 border overflow-hidden  m-3 border-gray-300 shadow-black placeholder:font-semibold placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none   focus:ring-indigo-500 focus:border-indigo-500"
             rows="2"
              required
            />
          </label>
          <label htmlFor="price">
            Price:
            <input
              type="text"
              placeholder="Enter the cost of your product"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="relative block w-full px-4 py-3  m-3 border border-gray-300 shadow-black placeholder:font-semibold placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none   focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </label>
          <label htmlFor="image">
            Image:
            <input
              type="file"
              onChange={handleImageChange}
              required
              className="relative block w-full px-4 py-3  m-3 border border-gray-400 shadow-black placeholder:font-semibold placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none   focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <button
            type="submit"
            className="border-2 border-black text-white rounded-lg p-2 relative bottom-1 left-28  bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-20"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
