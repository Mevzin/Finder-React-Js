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
