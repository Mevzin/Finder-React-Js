import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 638px;
  height: 239px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.transparent};

  transition: 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray800};
    cursor: pointer;
  }
`;

export const ImageSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: 100%;
`;

export const PrevButton = styled.button`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  width: 10%;
  height: 60%;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  z-index: 1;
  transition: all 0.3s ease;

  svg {
    font-size: 80px;
    color: ${({ theme }) => theme.colors.white};
  }

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const NextButton = styled.button`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  width: 10%;
  height: 60%;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  z-index: 1;
  transition: all 0.3s ease;
  right: 0;

  svg {
    font-size: 80px;
    color: ${({ theme }) => theme.colors.white};
  }

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const YearCar = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4px;
`;

export const NameCar = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`;

export const Locale = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray600};
  p {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-left: 6.25px;
  }
`;

export const ImageCar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  transition: 0.2s;
  background-size: cover;


  ${Container}:hover & {
    filter: grayscale(20%);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 336px;
`;

export const DividerDescription = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${({ theme }) => theme.colors.gray800};
  margin: 16px 0;
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 104px;
  height: 62px;
  background: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  svg,
  img {
    font-size: 24px;
  }

  span {
    font-size: 12px;
  }
`;

export const LinkCard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 336px;
`;