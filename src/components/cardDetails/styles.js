import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  > div {
    max-width: 1296px;
    width: 100%;
  }

  h3 {
    font-weight: 700;
    font-size: 28px;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin-bottom: 24px;
  p {
    color: white;
  }
  svg {
    margin: 0 12px;
  }
`;

export const Carousel = styled.div`
  margin-top: 24px;
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
  svg {
    width: 32px;
    height: 32px;
    padding: 9px;
    border-radius: 200px;
    transition: 0.3s;
    cursor: pointer;
    color: white;
    background: #fff3;

    :hover {
      color: #fd5631;
      background: #fff;
    }
  }
  .icon-heart {
    margin-right: 8px;
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

export const WrapperRight = styled.div`
  width: 100%;
  margin-top: 57px;
`;

export const KmLocation = styled.div`
  padding-top: 16px;
  padding-bottom: 32px;
  display: flex;
  font-weight: 400;
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    color: white;
    opacity: 0.7;
    margin-right: 4px;
  }

  /*  .km {
    margin-right: 16px;
    border-right: 1px solid #fff;
  } */
`;

export const Divider = styled.div`
  height: 19px;
  width: 1px;
  background: white;
  opacity: 0.15;
  margin: 0 16px;
`;
export const SellerInformation = styled.div`
  max-width: 526px;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
`;
export const UserClassification = styled.div`
  display: flex;
  gap: 8px;
  margin: 11px 0 19px;

  span {
    font-size: 14px;
  }
  .underline {
    text-decoration: underline;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  svg {
    color: #fdbc31;
  }

  .star {
    color: #ffffff;
    font-size: 14px;
    opacity: 0.7;
    display: flex;
    align-items: center;
  }
`;

export const Phone = styled.div`
  max-width: 188px;
  height: 52px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 14px 32px;
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 700;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;
export const SendEmail = styled.a`
  width: 100%;
  height: 52px;
  padding: 14px 32px;
  background: #fd5631;
  border-radius: 8px;
  max-width: 188px;
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  svg {
    margin-right: 5px;
  }
  :hover {
    background: #dc3915;
  }
`;
export const Newsletter = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 50px;
  padding: 20px;

  .checkbox {
    display: flex;

    > div {
      margin-right: 10px;
    }
  }
`;
export const WrapperOthersDetails = styled.div`
  max-width: 746px;
  width: 100%;
`;
export const Input = styled.form`
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;

  h5 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 24px;
  }

  span {
    font-size: 14px;
    opacity: 0.7;
  }

  svg {
    position: absolute;
    width: 55px;
    text-align: center;
    font-size: 23px;
    color: #c4c4c4;
  }

  input {
    height: 100%;
    width: 100%;
    color: white;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 0 50px 0 45px;
    font-size: 20px;
    caret-color: #fd5631;
    border-radius: 8px;
    transition: all 0.1s ease;
  }

  a {
    position: absolute;
    background: #fd5631;
    padding: 10px 24px;
    border-radius: 8px;
    right: 0;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-right: 10px;
    text-decoration: navajowhite;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background: #dc3915;
    }
  }
`;

export const Stamp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 182px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  font-size: 14px;
  margin-bottom: 49px;

  div {
    width: 148px;
    height: 134px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  span {
    height: 40px;
  }

  img {
    width: 80px;
    height: 80px;
    padding: 13px;
    background: #1f1b2d;
    border-radius: 12px;
    margin-bottom: 12px;
  }
`;
export const SellerDescription = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 13px;
  h4 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 24px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    opacity: 0.7;
  }

  a {
    font-size: 16px;
    text-decoration-line: underline;
    color: #fd5631;
    transition: 0.3s;

    :hover {
      color: #dc3915;
    }
  }
`;
export const Published = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 50px;

  div {
    color: #ffffff;
    opacity: 0.7;
  }
`;

export const ButtonsImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    position: relative;
    top: -20px;
  }
`;