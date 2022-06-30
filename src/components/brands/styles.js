import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 96px 0;
`;

export const BrandsImg = styled.img`
  width: 86px;
  height: 48px;
  filter: brightness(0.5);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(1);
  }
`;