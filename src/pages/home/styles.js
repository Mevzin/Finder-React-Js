import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  font-family: 'Noto sans', sans-serif;
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
  width: 746px;
  height: 416px;
`;