import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import "../index.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../Components/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";
import Banners from "../Components/banners";
import Login from "../Components/Login";

function App() {
   const fetchStatus=useSelector((store)=> store.fetchStatus);
   console.log(fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching?<LoadingSpinner/>:<Outlet/> }


      <Footer />
    </>
  );
}
export default App;
