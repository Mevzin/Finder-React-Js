import React from "react";

import LoadingImage from "@assets/loading.svg";

import { ContainerLoading } from "./styles";

import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <ContainerLoading>
        <img src={LoadingImage} />
      </ContainerLoading>
    </motion.div>
  );
};

export default LoadingScreen;
