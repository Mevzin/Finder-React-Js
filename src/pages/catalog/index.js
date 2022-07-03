import React from "react";

import { useParams } from "react-router-dom";

const Catalog = () => {
  let { state } = useParams();

  if(state.includes("=")){
    state = state.split("=")
    if(state.includes("&")){
      state = state.split("&")
    }
  }

  return (
    <>
      <h3>catalogo</h3>
    </>
  );
};

export default Catalog;
