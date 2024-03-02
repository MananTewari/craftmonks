import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import "../src/index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemsCreater from "./Components/createItems";
function App() {
  const item =
   {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
}
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
        <main>
          <div className="items-container">
            <ItemsCreater item={item} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
export default App;
