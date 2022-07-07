import React from 'react';

import LoadingImage from "@assets/loading.svg"
import Logo from "@assets/Logo.svg"

import { ContainerLoading, ImageLogo } from './styles';

const LoadingScreen = () => {
  return(
    <ContainerLoading>
    <ImageLogo src={Logo}/>
    <img src={LoadingImage}/>
  </ContainerLoading>
  );
}

export default LoadingScreen;