import React from "react";
import { Nav } from "./Components/Navbar";
import {Routes, Route} from "react-router-dom"
import { Home, About, Cart, Login } from "./Components/Pages";

function App(){
  return(
    <div className="App">
    <Nav/>
    <Routes>
<Route path="/home" element={<Home />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/departments" element={<Cart />}></Route>
<Route path="/login" element={<Login />}></Route>
    </Routes>
    
    
    
    
    </div>
  );
}
export default App;
