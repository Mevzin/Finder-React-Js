import React from "react";

import {
  ContainerNew,
  ContainerUsed,
  LabelBadge,
} from "./styles";

const Badge = ({ typeBadge, isCertified }) => {
  if (typeBadge === "usado") {
    return (
      <ContainerUsed>
        <LabelBadge>Usado</LabelBadge>
      </ContainerUsed>
    );
  }
  if (typeBadge === "novo") {
    return (
      <ContainerNew>
        <LabelBadge>Novo</LabelBadge>
      </ContainerNew>
    );
  }
};

export default Badge;
