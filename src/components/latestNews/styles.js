import styled from "styled-components";

export const LatestNews = styled.section`
    margin-bottom: 50px;
`;

export const TitleNew = styled.div`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
    margin-left: 380px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const TitleGo = styled.a`
    margin-right: 380px;
    cursor: pointer;
    opacity: 0.75;
`;

export const News = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`;

export const Offers = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
`;

export const TitleOffers = styled.h3`
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.75;
    margin-top:5px;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`;

export const Username = styled.p`
    font-size: 14px;
    margin-left: 10px;
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.white};
`;