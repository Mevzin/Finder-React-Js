import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 1296px;
  z-index: 1;
`;

export const LogoLink = styled.div`
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
    font-size: 14px;
    text-decoration: none;
  }
`;
export const Buttons = styled.div``;

export const ButtonSignIn = styled.button`
  background: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  width: 110px;
  height: 36px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;

  svg {
    margin-right: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonSignUp = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border: none;
  width: 110px;
  height: 36px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;

  svg {
    margin-right: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
