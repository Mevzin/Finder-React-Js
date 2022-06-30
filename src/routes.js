import React from "react";

import Home from "./pages/home";
import Details from "./pages/details";
import Catalog from "./pages/catalog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="detalhes" element={<Details />} />
        <Route path="catalogo" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
