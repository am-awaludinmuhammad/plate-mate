import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

const Pages = () => {
  return (
    <div className="container mx-auto max-w-[1024px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </div>
  );
};

export default Pages;
