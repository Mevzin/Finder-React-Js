import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 1296px;
`;

export const LogoLink =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const Logo = styled.div`
  margin-right: 56.8px;
  height: 32px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    margin-left: 32px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Noto Sans, sans-serif;
    font-size: 14px;
  }
`;
export const Buttons = styled.div``;

export const ButtonSignIn = styled.button`
  background: transparent;
  border: none;
  width: 110px;
  height: 36px;
  align-items: center;
  font-family: Noto Sans, sans-serif;
  color: ${({ theme }) => theme.colors.white};
  

  img {
    margin-right: 5px;
  }
`;

export const ButtonSignUp = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  width: 110px;
  height: 36px;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-family: Noto Sans, sans-serif;
  img {
    margin-right: 5px;
  }
`;

