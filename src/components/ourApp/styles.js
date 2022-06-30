import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 458px;
  margin: 50px 0px 77px 0px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray900};
`;
export const ContestApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    width: 526px;
    height: 81px;
    margin-top: 25px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    color: ${({ theme }) => theme.colors.white};
    opacity: 0.7;
  }
  button {
    box-sizing: border-box;
    width: 201px;
    height: 64px;

    background: ${({ theme }) => theme.colors.gray900};
    border: 1px solid #454056;
    box-shadow: 0px 4px 12px -6px rgba(31, 27, 45, 0.2),
      0px 8px 16px rgba(31, 27, 45, 0.16);
    border-radius: 8px;
    z-index: 0;
  }
  img {
    margin: -10px 0px 0px -18px;
  }
`;

export const ButtonApp = styled.div`
  display: flex;

  button {
    box-sizing: border-box;
    width: 201px;
    height: 64px;
    margin-top: 48px;
    margin-right: 24px;
    background: ${({ theme }) => theme.colors.gray900};
    border: 1px solid #454056;
    box-shadow: 0px 4px 12px -6px rgba(31, 27, 45, 0.2),
      0px 8px 16px rgba(31, 27, 45, 0.16);
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const LogoApp = styled.div`
  display: flex;

  img {
    margin-left: 130px;
    width: 460px;
    height: 440px;
  }
`;
