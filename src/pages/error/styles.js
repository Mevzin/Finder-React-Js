import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MessageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  color: ${({ theme }) => theme.colors.white};

  img {
    height: 450px;
  }
`;

export const TextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;
