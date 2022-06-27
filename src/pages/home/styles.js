import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
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
  font-family: "Noto sans", sans-serif;
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
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.gray800};
  transition: 0.3s;
  cursor: pointer;

  p {
    margin-right: 5px;
  }

  &:hover{
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const MostSearchContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

