import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
