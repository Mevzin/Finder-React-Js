import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 458px;
  background: ${({ theme }) => theme.colors.transparent};
`;

export const FooterHeader = styled.div`
  display: flex;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray800};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1296px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  img {
    width: 115.2px;
    height: 32px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26px;

  svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
  }

  select {
    max-width: 100%;
    height: 40px;
    background: transparent;
    border: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray500};

    &:focus {
      outline: 0;
    }
  }
`;

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1296px;
  height: 100%;
  margin: 0 auto;
`;

export const NewsLetterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: start;

  h2 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray700};
    margin-bottom: 24px;
  }
`;

export const InputEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 306px;
  height: 52px;
  background: ${({ theme }) => theme.colors.transparent};
  border: 0.5px solid ${({ theme }) => theme.colors.gray700};
  border-radius: 8px;

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray700};
  }

  input {
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray700};
    margin-left: 9px;
    margin-right: 9px;

    &:focus {
      outline: 0;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 6px;
    transition: 0.2s;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.white};

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const BuySaleContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 12px;
    font-size: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray700};
    font-size: 14px;
    margin-bottom: 4px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 12px;
    font-size: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray700};
    font-size: 14px;
    margin-bottom: 4px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 12px;
    font-size: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray700};
    font-size: 14px;
    margin-bottom: 4px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    margin-right: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;

  button {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50px;
    margin: 3px;
    background: ${({ theme }) => theme.colors.transparent};
    cursor: pointer;
    transition: 0.2s;

    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const FooterEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  width: 1296px;
  margin: 0 auto;
`;

export const Copyright = styled.div`
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray600};
    margin-left: 24px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.gray400};
    }
  }
`;
