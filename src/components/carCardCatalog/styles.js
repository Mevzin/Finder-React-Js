import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 0;
  position: relative;
  width: 100%;
  max-width: 471px;
  color: white;
  height: 100%;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0);
  transition: 0.3s;

  :hover {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

export const ImageCar = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
  height: 100%;
  max-height: 241px;
  object-fit: cover;
`;

export const InfoPrimary = styled.div`
  border-bottom: 1px solid #605d6a;
  padding-bottom: 16px;
  margin-bottom: 16px;

  p {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 4px;
  }
  span {
    font-weight: 700;
    font-size: 16px;
    color: #fd5631;
    margin-bottom: 4px;
  }
  div {
    font-weight: 400;
    font-size: 14px;
    margin-top: 4px;
  }
`;
export const InfoSecondary = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;

  > div {
    background: #231f31;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    padding: 10px 0;
  }
`;
export const CardBottom = styled.div`
  padding: 20px;

  .ano {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  input[type="checkbox"] {
    display: inline-block;
    cursor: pointer;
    font-size: 13px;
    line-height: 2.3;
    margin-right: 10px;
  }
  label {
    display: flex;
    align-items: center;
  }
  .containercheckboxtipo {
    display: flex;
    align-items: center;
    max-height: 182px;
    overflow: auto;
  }
`;

export const Tag = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #3c76f2;
  padding: 2px 10px;
  font-weight: 400;
  font-size: 14px;
  border-radius: 6px;
`;
