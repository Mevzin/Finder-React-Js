import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 160px;
  transition: 0.3s;
  border-radius: 12px;
  margin-top: 22px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent};
  }
`;

export const IconCar = styled.img`

`;

export const NameModel = styled.p`
  text-decoration: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  margin-top: 31px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;