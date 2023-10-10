// React
import React from "react";
// React

// React Router DOM => Router
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";
// React Router DOM => Router

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:categoryId" element={<SingleCategory />} />
    </Routes>
  );
};

export default Router;
