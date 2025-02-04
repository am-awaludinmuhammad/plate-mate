import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import RecipeDetail from "./RecipeDetail";

const Pages = () => {
  return (
    <div className="container mx-auto max-w-[1024px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
};

export default Pages;
