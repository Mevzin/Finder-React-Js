import React, { useEffect, useState } from "react";

import { BrandsImg, Container } from "./styles";

import AudiIcon from "@assets/brand/audi.svg";
import HondaIcon from "@assets/brand/honda.svg";
import HyundaiIcon from "@assets/brand/hyundai.svg";
import InfinitiIcon from "@assets/brand/infiniti.svg";
import LexusIcon from "@assets/brand/lexus.svg";
import MazdaIcon from "@assets/brand/mazda.svg";
import MercedesIcon from "@assets/brand/mercedes.svg";
import MitsuIcon from "@assets/brand/mitsubishi.svg";
import NissanIcon from "@assets/brand/nissan.svg";
import OpelIcon from "@assets/brand/opel.svg";
import RenaultIcon from "@assets/brand/renault.svg";
import ToyotaIcon from "@assets/brand/toyota.svg";

const Brands = () => {

  return(
    <Container>
      <BrandsImg src={OpelIcon}/>
      <BrandsImg src={AudiIcon}/>
      <BrandsImg src={MercedesIcon}/>
      <BrandsImg src={ToyotaIcon}/>
      <BrandsImg src={MazdaIcon}/>
      <BrandsImg src={NissanIcon}/>
      <BrandsImg src={HyundaiIcon}/>
      <BrandsImg src={LexusIcon}/>
      <BrandsImg src={HondaIcon}/>
      <BrandsImg src={RenaultIcon}/>
      <BrandsImg src={InfinitiIcon}/>
      <BrandsImg src={MitsuIcon}/>
    </Container>
  );
};

export default Brands;