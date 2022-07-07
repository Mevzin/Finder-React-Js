import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  width: 100%;
`;

export const ImageLogo = styled.img`
  height: 250px;
`;