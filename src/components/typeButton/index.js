import React from 'react';

import { Container, Title } from './styles';

const TypeButton = ({
  title,
  isActive,
  ...rest
}) => {

  return(
    <Container
    isActive={isActive}
    {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  );
};

export default TypeButton;