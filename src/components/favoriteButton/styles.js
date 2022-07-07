import styled from "styled-components";
import { Container } from "../cardOffers/styles";
import { Container as ContainerMd } from "../cardOffersMd/styles";

export const ContainerFav = styled.button`
  opacity: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  top: 20px;
  right: 20px;
  z-index: 1;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  border: none;
  transition: 0.2s;

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.danger};
  }

  ${Container}:hover & {
    opacity: 1;
  }

  ${ ContainerMd }:hover & {
    opacity: 1;
  }
`;
