import React from "react";

import { Container , LabelBadge} from "./styles";

const Badge = ({ typeBadge }) => {
  return (
    <Container tpBadge={"warning"}>
      <LabelBadge>{typeBadge}</LabelBadge>
    </Container>
  );
};

export default Badge;
