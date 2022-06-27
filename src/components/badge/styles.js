import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.warning};
  width: 62px;
  height: 24px;
  border-radius: 12px;
`;

export const LabelBadge = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;
