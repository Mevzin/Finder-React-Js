import styled from "styled-components";

export const Carousel = styled.div`
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
`;
