import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 416px;
  align-items: flex-start;
`;

export const ImagePost = styled.img`
  margin-bottom: 16px;
`;

export const BadgeText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`;

export const TextCard = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: 16px;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ImageProfileContainer = styled.div`
  margin-right: 8px;
`;

export const ImageProfile = styled.img``;

export const NameProfile = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4px;
`;

export const DataProfile = styled.div``;

export const DatePost = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray600};

  span {
    font-size: 12px;
    margin-left: 4px;
  }

  svg{
    font-size: 14px;
  }
`;

export const DownloadAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1076px;
  height: 440px;
  margin: 0 auto;
  margin-bottom: 72px;
`;
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  align-items: start;
`;
export const TitleDown = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
  margin-left: 10px;
`;
export const TextDown = styled.p`
  font-size: 18px;
  text-align: start;
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: 48px;
  margin-left: 10px;
`;
export const ButtonsDown = styled.div`
  img{
    cursor: pointer;
  }
`;
export const ImageArea = styled.div``;