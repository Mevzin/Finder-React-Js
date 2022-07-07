import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 75px;
`;

export const TitlePublished = styled.h2`
  color: white;
  margin-bottom:30px;
`;

export const MenuPublish = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
`;

export const ButtonsPublish = styled.div`
  margin-right: 30px;
`;

export const ArrowImg = styled.img`
  margin-bottom: -5px;
`;

export const ButtonPublish = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  padding: 8px 16px;
  margin-right: 10px;
  gap: 10px;
  width: 67px;
  height: 37px;
  background: rgba(255, 255, 255, 0.04);
  color: white;
  border-radius: 8px;
  border: none;

  &:hover {
    cursor: pointer;
    background:white;
    color: #fd5631;
  }
`;

export const SeeaAll = styled.a`
  color: white;
  opacity: 0.75;
  margin-right: 5px;
  cursor: pointer;
`;

export const CardPublish = styled.div`
  margin-left: 14px;
  width:94% !important;
  height: 480px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    transform: scale(1.1);
    transform-origin: center;
    transition: 0.3s ease all;
    height: 500px;
  }
`;

export const CardPublishImg = styled.img`
  display: flex;
  width: 100%;
  height: 241px;
  border-radius: 12px 12px 0px 0px;
`; 

export const CheckboxCard = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  color: white;
`;

export const Modelyear = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  color: white;
`;

export const NewEdge = styled.div`
  position: relative;
  padding: 2px 10px 27px;
  width: 62px;
  height: 25px;
  background: #fdbc31;
  border-radius: 6px;
  z-index: 2;
  margin-top: -210px;
  margin-bottom: 190px;
  margin-left: 1vw;
`;

export const UsedEdge = styled.div`
  position: relative;
  padding: 2px 10px 27px;
  width: 70px;
  height: 25px;
  background: #3c76f2;
  border-radius: 6px;
  z-index: 2;
  margin-top: -210px;
  margin-bottom: 190px;
  margin-left: 1vw;
`;

export const InputCheckbox = styled.input`
  margin-right: 5px;
`;


export const NewTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const CarTitle = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  margin-left: 20px;
  margin-top: 11px;
  color: white;
  opacity: 0.75;
`;

export const CardPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  margin-left: 20px;
  margin-top: 14px;
  color: #fd5631;
`;

export const Place = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  margin-top: 15px;
`;

export const PlaceTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-left: 5px;
  color:white;
  opacity: 0.75;
`;

export const VerticalLine = styled.hr`
  height: 0px;
  left: 20px;
  right: 20px;
  bottom: 98px;
  margin: 0px 20px;
  opacity: 0.15;
  border: 1px solid white;
  margin-top: 10px;
`;

export const CarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 117px;
  height: 62px;
  background:#1f1b2d;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const InfoTitle = styled.div`
    color: white;
`;