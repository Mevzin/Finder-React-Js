import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1296px;
  margin: 0 auto;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 120px;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 526px;
`;

export const BannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 56px;
  margin-bottom: 32px;
`;

export const BannerParagraph = styled.p`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 18px;
  max-width: 416px;
`;

export const BannerImage = styled.img`
  margin-top: 18px;
  width: 746px;
  height: 416px;
  z-index: 1;
`;

export const ShapeImg = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;

export const MostSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 72px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleSection = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ViewAllResults = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.gray800};
  transition: 0.3s;
  cursor: pointer;

  svg {
    height: 21.11px;
  }

  p {
    margin-right: 5px;
  }

  &:hover{
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const MostSearchContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const HeaderOffers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const MainCard = styled.div`

`;

export const SecondaryCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const FirstTextColum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 416px;
  height: 368px;
`;

export const FirstParagraphText = styled.div`
  display: flex;
  flex-direction: row-reverse;

  svg {
    height: 24px;
    width: 24px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 16px;
  }
`;

export const FirstContentParagraphs = styled.div`
  text-align: end;
  width: 376px;

  h3{
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

export const SecondTextColum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 416px;
  height: 368px;
`;

export const SecondParagraphText = styled.div`
  display: flex;

  svg {
    height: 24px;
    width: 24px;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 16px;
  }
`;

export const SecondContentParagraphs = styled.div`
  text-align: start;
  width: 376px;

  h3{
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

export const CarRoadImg = styled.img`
  position: relative;
  top: -32.22px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const LastNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 390px;
  margin-bottom: 80px;
`;

export const LastNewsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;