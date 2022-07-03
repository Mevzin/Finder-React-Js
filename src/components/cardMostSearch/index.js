import React from "react";

import { Container, IconCar, NameModel } from "./styles";

import SuvIcon from "@assets/modelsIcons/suvIcon.svg";
import UtilIcon from "@assets/modelsIcons/crossover.svg";
import VanIcon from "@assets/modelsIcons/familyMpv.svg";
import PickupIcon from "@assets/modelsIcons/pickup.svg";
import SedanIcon from "@assets/modelsIcons/sedan.svg";
import HatbackIcon from "@assets/modelsIcons/wagon.svg";
import CoupeIcon from "@assets/modelsIcons/coupe.svg";
import { Link } from "react-router-dom";

const CardMostSearch = ({ carModel, idModel }) => {
  function getCarImageByName(carModel) {
    switch (carModel) {
      case "SUV":
        return <IconCar src={SuvIcon} alt="SUV" />;
      case "Utilitário":
        return <IconCar src={UtilIcon} alt="Utilitário" />;
      case "Van":
        return <IconCar src={VanIcon} alt="Van" />;
      case "Pickup":
        return <IconCar src={PickupIcon} alt="Pickup" />;
      case "Sedan":
        return <IconCar src={SedanIcon} alt="Sedan" />;
      case "Hatback":
        return <IconCar src={HatbackIcon} alt="Hatback" />;
      case "Coupe":
        return <IconCar src={CoupeIcon} alt="Coupe" />;
    }
  }

  return (
    <Link to={"/catalogo/novo/typeCar=" + idModel}>
      <Container>
        {getCarImageByName(carModel)}
        <NameModel>{carModel}</NameModel>
      </Container>
    </Link>
  );
};

export default CardMostSearch;
