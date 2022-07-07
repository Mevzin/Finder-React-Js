import styled from "styled-components";

export const ContainerCertified = styled.div`
  position: absolute;
  top: 47px;
  left: 20px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.success};
  width: 77px;
  height: 24px;
  border-radius: 8px;
`;

export const LabelBadge = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;
