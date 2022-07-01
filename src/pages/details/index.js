import React from "react";

import Navbar from "@components/navBar";
import Footer from "@components/footer";
import CardDetails from "@components/cardDetails";

import { Container, WrapperNavBar } from "./styles";

const Details = () => {
  return (
    <Container>
      <WrapperNavBar>
        <Navbar />
      </WrapperNavBar>
      <CardDetails />
      <Footer />
    </Container>
  );
};

export default Details;
