import React from "react";
import "./App.css";
//import all the components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Searsh from "./components/Searsh/Searsh";
import Trending from "./components/Trending/Trending";
import Sellers from "./components/Sellers/Sellers";
import Auction from "./components/Auction/Auction";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Searsh />
     
    </>
  );
};

export default App;
