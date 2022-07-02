import styled from "styled-components";

export const Selection = styled.select`
  width: 100%;
  height: 44px;
  margin-top: 12px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;

  option {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.white};
  }
`;
