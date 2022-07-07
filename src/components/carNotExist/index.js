import React from "react";

import { Container, LinkStyled } from "./styles";
import ImageCarNotFoundError from "@assets/carNotFound.svg";

import { motion } from "framer-motion";

const CarNotExist = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <img src={ImageCarNotFoundError} />
        <h1>Este carro não existe no nosso sistema :'(</h1>
        <h2>
          Vá para o nosso{" "}
          <LinkStyled to="/catalogo/novo/all">catalogo!</LinkStyled>
        </h2>
      </Container>
    </motion.div>
  );
};

export default CarNotExist;
