import React from "react";

import { Container, IconCar, NameModel } from "./styles";

import SuvIcon from "@assets/modelsIcons/suvIcon.svg";
import PickupIcon from "@assets/modelsIcons/pickup.svg";
import SedanIcon from "@assets/modelsIcons/sedan.svg";
import CoupeIcon from "@assets/modelsIcons/coupe.svg";
import FamilyMpvIcon from "@assets/modelsIcons/familyMpv.svg";
import CrossoverIcon from "@assets/modelsIcons/crossover.svg";
import WagonIcon from "@assets/modelsIcons/wagon.svg";
import CompactIcon from "@assets/modelsIcons/compact.svg";
import ConvertibleIcon from "@assets/modelsIcons/convertible.svg";
import SportCoupeIcon from "@assets/modelsIcons/sportCoupe.svg";

import { Link } from "react-router-dom";

const CardMostSearch = ({ carModel, idModel }) => {
  function getCarImageByName(carModel) {
    switch (carModel) {
      case "SUV":
        return <IconCar src={SuvIcon} alt="SUV" />;
      case "Pickup":
        return <IconCar src={PickupIcon} alt="Pickup" />;
      case "Sedan":
        return <IconCar src={SedanIcon} alt="Sedan" />;
      case "Coupe":
        return <IconCar src={CoupeIcon} alt="Coupe" />;
      case "Family MPV":
        return <IconCar src={FamilyMpvIcon} alt="Family Mpv" />;
      case "Crossover":
        return <IconCar src={CrossoverIcon} alt="Crossover" />;
      case "Wagon":
        return <IconCar src={WagonIcon} alt="Wagon" />;
      case "Compact":
        return <IconCar src={CompactIcon} alt="Compact" />;
      case "Convertible":
        return <IconCar src={ConvertibleIcon} alt="Convertible" />;
      case "Sport Coupe":
        return <IconCar src={SportCoupeIcon} alt="SportCoupe" />;
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
