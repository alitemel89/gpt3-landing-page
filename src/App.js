import React from "react";
import Brand from "./components/Brand/Brand";
import Cta from "./components/Cta/Cta";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./containers/Blog/Blog";
import Features from "./containers/Features/Features";
import Header from "./containers/Header/Header";
import WhatGPT3 from "./containers/WhatGPT3/WhatGPT3";
import Footer from "./containers/Footer/Footer";
import Possibility from "./containers/Possibility/Possibility";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
