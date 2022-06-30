import styled from "styled-components";

export const Carousel = styled.div`
  margin-bottom: 124px;

  .slick-slide div div div img {
    width: 746px;
    border-radius: 12px;
    height: 420px;
    object-fit: cover;
  }
  .slick-dots li {
    width: 100px;
  }
  .slick-thumb img {
    width: 100px;
  }
  .slick-dots {
    bottom: -92px;
  }
  .slick-arrow {
    color: #666276;
    background: white;
    border-radius: 2020px;
    width: 36px;
    height: 36px;
    font-size: 18px;
    padding: 9px;
  }
  .slick-next {
    right: 10px;
  }
  .slick-prev {
    left: 10px;
    z-index: 11;
  }
  div.wrapper-carousel {
    position: relative;
  }
  p.number-of-slides-details {
    position: absolute;
    right: 16px;
    bottom: 10px;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;

export const WrapperTittle = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: white;
  }
  .icon-heart {
    color: white;
    background: #fff3;
    padding: 5px;
    font-size: 21px;
    border-radius: 200px;
  }
`;

export const Specifications = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  div {
    margin-bottom: 8px;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 24px;
  }
  span.specifications-value {
    opacity: 0.7;
  }
`;
export const WrapperSpecifications = styled.div`
  display: flex;
  gap: 24px;
`;

export const WrapperLeft = styled.div``;

export const WrapperRight = styled.div``;
