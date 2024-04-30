
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import AddProductPage from "./components/addProduct/AddProductPage";
import LandingProductPage from "./components/addProduct/AllProduct";

function App() {
  return (

    <>
      <BrowserRouter>
         
        <Routes>
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/navbar" element={<Navbar />} />
          
          <Route path="/login" element={<LoginPage/>} />

          <Route path="/register" element={<Register/>} />

          <Route path="/footer" element={<Footer/>} />

          <Route path="/products" element={<LandingProductPage />} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
