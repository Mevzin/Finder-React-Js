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

  hr {
    margin-top: 24px;
    opacity: 0.15;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  h1 {
    width: 100%;
    height: 27px;
    left: 0px;
    margin-top: 24px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.white};
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-right: 12px;

    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
  }
  h5 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-left: 12px;

    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContentFilterCard = styled.div`
  display: flex;
`;

export const ContainerFilters = styled.div`
  width: 290px;
  margin: 0px 40px 329px 0px;
`;

export const ContainerButton = styled.div`
  display: flex;
`;

export const ButtonNewCars = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.transparent};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonUsedCars = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.transparent};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const Year = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 129px;
  }

  hr {
    width: 16px;
    height: 2px;

    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CarsUsed = styled.div`
  display: flex;

  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Titulo = styled.div`
  margin-top: 16px;
  /* margin-left: -160px; */
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;

    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Order = styled.div`
  display: flex;
  margin-top: 59px;
  /*  margin-left: -280px; */

  span {
    width: 180px;
    height: 36px;
    margin-left: 12px;
    margin-top: -25px;
  }

  hr {
    width: 0px;
    height: 20px;
    margin-top: -2px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const SortyBy = styled.div`
  display: flex;
  margin-bottom: 80px;

  span {
    width: 180px;
    height: 36px;
    margin-left: 12px;
    margin-top: -25px;
  }

  hr {
    width: 0px;
    height: 20px;
    margin-top: -2px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const WrapperCatalog = styled.div`
  display: flex;
  margin-top: 60px;
`;
export const ContentListCards = styled.div`
  width: 100%;
`;
export const HeaderFilterRight = styled.div``;
export const ListCards = styled.div`
  margin: 32px 0;
  display: grid;
  grid-template-columns: 495px 495px;
  grid-auto-rows: 495px;
`;

export const Test = styled.div`
  display: flex;
  height: 471px;
`;

export const ContainerErrorSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
  }
`;