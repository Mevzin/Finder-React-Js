import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Catalog from "../../pages/catalog";
import Details from "../../pages/details";
import Error from "../../pages/error";
import Home from "../../pages/home";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="detalhes/:idCar" element={<Details />} />
        <Route path="catalogo/:state/:filterParams" element={<Catalog />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
