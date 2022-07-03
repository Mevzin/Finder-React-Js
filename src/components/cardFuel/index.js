import React, { useContext, useState } from "react";
import { BackCard, Container, FrontCard } from "./styles";
import PetrolIcon from "@assets/icons/petrol.svg";
import { useFinder } from "../../context/finder";


const CardFuel = ({fuel}) => {
  const { finderProps } = useFinder();

  function getLabelFuel(idFuel){
    const fuelResult = finderProps.fuel.find((fuel) => idFuel === fuel.id);
    
    return(
          <span key={idFuel}>{fuelResult?.label}</span>
    );
  }


  return (
    <Container>
      <FrontCard>
        <img src={PetrolIcon} />
        {finderProps.hasOwnProperty('fuel') && fuel?.length > 1 ? ( getLabelFuel(fuel[0])) : ( <span>Flex - {fuel?.length}</span>)}
      </FrontCard>
      <BackCard>
        {finderProps.hasOwnProperty('fuel') && fuel?.map((iFuel) => (getLabelFuel(iFuel)))} 
      </BackCard>
    </Container>
  );
};

export default CardFuel;
