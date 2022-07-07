import React from "react";

import LoadingImage from "@assets/loading.svg";
import Logo from "@assets/Logo.svg";

import { ContainerLoading, ImageLogo } from "./styles";

import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <ContainerLoading>
        <ImageLogo src={Logo} />
        <img src={LoadingImage} />
      </ContainerLoading>
    </motion.div>
  );
};

export default LoadingScreen;
