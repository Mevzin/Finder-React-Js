import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";

import ImageError from "@assets/404error.svg";

import { Container, Content, MessageArea, TextArea } from "./styles";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Error = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Content>
          <Navbar />
          <MessageArea>
            <img src={ImageError} />
            <TextArea>
              <h1>Página não encontrada</h1>
              <p>
                Tente voltar para <Link to="/">página inicial</Link>!
              </p>
            </TextArea>
          </MessageArea>
        </Content>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Error;
