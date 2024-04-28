import React, { useState } from "react";
import logo from "../picture/logo.png";



const Navbar = () => {
  const [active, setActive] = useState("blog");

  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-200 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <img src={logo} alt="Company Logo" className="h-8 w-8 mr-2" />
        <span className="font-semibold text-xl tracking-tight">
          Company Name
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-green-800 border-green-700 hover:text-black hover:border-black">
          <svg 
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#products"
            className={`block mt-4 lg:inline-block lg:mt-0 text-green-800 hover:text-green-900 mr-4 ${
              active === "products" ? "text-red-500" : ""
            }`}
            onClick={() => setActive("products")}
          >
            Products
          </a>
          <a
            href="#contact"
            className={`block mt-4 lg:inline-block lg:mt-0 text-green-800 hover:text-green-900 mr-4 ${
              active === "contact" ? "text-red-500" : ""
            }`}
            onClick={() => setActive("contact")}
          >
            Contact
          </a>
          <a
            href="#blog"
            className={`block mt-4 lg:inline-block lg:mt-0 text-green-800 hover:text-green-900 ${
              active === "blog" ? "text-red-500" : ""
            }`}
            onClick={() => setActive("blog")}
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-800 border-green-700 hover:border-green-900 hover:text-green-900 mt-4 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
