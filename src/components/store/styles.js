import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 48px;
  margin-bottom: 103px;
`

export const Carousel = styled.div`
display: flex;
justify-content: flex-end;
.slick-slider {
  margin-left: 250px;

  h3 {
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    margin-top: 12px;
  }
}
  .slick-arrow {
  color: #fff;
  left: -499px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 2020px;
  width: 36px;
  height: 36px;
  font-size: 18px;
  padding: 9px;

  :hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
}
.slick-prev,
.slick-next {
  top: 270px;
  /* left: -208px; */
}
.slick-next {
  left: -440px;
}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  justify-content: space-around;

h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.white};
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  margin: 16px 0 40px 0;
}

a {
    width: 158px;
    display: block;
    padding: 10px 24px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    :hover {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`