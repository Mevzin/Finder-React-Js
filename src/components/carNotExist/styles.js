import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;

  img {
    width: 500px;
    margin-bottom: 10px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(0.5);
  }

`;
