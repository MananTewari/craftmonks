import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import "../index.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";


function App() {
 
  return (
    <>
      {/* <div classNameName="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        </Routes>
    </div> */}
      <div>
        <Header />
       <Outlet/>
        <Footer />
      </div>
    </>
  );
}
export default App;
