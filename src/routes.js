import React from "react";

import Home from "./pages/home";
import Details from "./pages/details";
import Catalog from "./pages/catalog";
import Error from "./pages/error";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="detalhes/:idcar" element={<Details />} />
        <Route path="catalogo/:state/:model" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
