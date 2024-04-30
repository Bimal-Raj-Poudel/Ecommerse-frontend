
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import ProductCard from "./components/addProduct/ProductCard";
import AllProduct from "./components/addProduct/AllProducts";
import AddProductPage from "./components/addProduct/AddProductPage";

function App() {
  return (

    <>
      <BrowserRouter>
      <Navbar />

        <Routes>
          
         <Route path="/productcard" element={<ProductCard/>}/>

        <Route path="/products" element={<AllProduct />} />

           <Route path="/addProduct" element={<AddProductPage />} />  
          <Route path="/login" element={<LoginPage/>} />

          <Route path="/register" element={<Register/>} />

          <Route path="/footer" element={<Footer/>} />


        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
