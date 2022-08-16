import React from "react";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import { Route, BrowserRouter, Routes } from "react-router-dom";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-one" element={<Page1 />} />
    </Routes>
  );
}
