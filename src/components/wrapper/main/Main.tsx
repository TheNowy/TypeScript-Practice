import React from "react";
import Home from "../../pages/home/Home";
import Blog from '../../pages/blog/Blog'
import {BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};
