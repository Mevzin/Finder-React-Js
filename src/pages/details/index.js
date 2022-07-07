import React, { useContext } from "react";

import Navbar from "@components/navBar";
import Footer from "@components/footer";
import CardDetails from "@components/cardDetails";
import DetailsCarousel from "@components/DetailsCarousel";

import { Container, WrapperNavBar } from "./styles";

import { motion } from "framer-motion";

const Details = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}
    transition= {{ duration: 0.6 }}
    >
      <Container>
        <WrapperNavBar>
          <Navbar />
        </WrapperNavBar>
        <CardDetails />
        <DetailsCarousel />
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Details;
