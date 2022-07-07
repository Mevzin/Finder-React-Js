import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.transparent};
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.white};
    `};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;


export const Title = styled.span`
  font-weight: 400;
`;