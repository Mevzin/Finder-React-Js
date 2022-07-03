import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 62px;
  background: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  svg,
  img {
    font-size: 24px;
  }

  span {
    font-size: 12px;
  }

  ${Container}:hover & {
    display: none;
  }
`;

export const BackCard = styled.div`
  display: none;
  flex-direction: column;
  max-height: 100%;

  span {
    font-size: 12px;
    text-align: center;
  }

  ${Container}:hover & {
    display: flex;
  }
`;
