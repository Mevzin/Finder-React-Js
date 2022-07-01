import React from "react";

import Navbar from "@components/navBar";
import Footer from "@components/footer";

import { Container, Content } from "./styles";
const Catalog = () => {
  return (
    <>
      <Container>
        <Content>
          <Navbar />
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default Catalog;
