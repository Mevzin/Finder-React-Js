import styled from "styled-components";

export const CheckboxAll = styled.div``;

export const Check = styled.div`
  margin: 12px 0px 12px 0px;
  height: 150px;
  overflow: auto;
  color: ${({ theme }) => theme.colors.white};

  span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin-left: 15px;
  }
`;
