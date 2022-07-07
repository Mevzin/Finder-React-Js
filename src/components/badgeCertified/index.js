import React from "react";

import {
  ContainerCertified,
  LabelBadge,
} from "./styles";

const BadgeCertified = ({ isCertified }) => {
  if (isCertified === true) {
    return (
      <ContainerCertified>
        <LabelBadge>Certificado</LabelBadge>
      </ContainerCertified>
    );
  }
};

export default BadgeCertified;
