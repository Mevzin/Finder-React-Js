import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";

import ImageError from "@assets/404error.svg";

import { Container, Content, MessageArea, TextArea } from "./styles";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <Content>
        <Navbar />
        <MessageArea>
          <img src={ImageError} />
          <TextArea>
            <h1>Página não encontrada</h1>
            <p>Tente voltar para <Link to="/">página inicial</Link>!</p>
          </TextArea>
        </MessageArea>
      </Content>
      <Footer />
    </Container>
  );
};

export default Error;
