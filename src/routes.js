import React from "react";

import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default Router;
