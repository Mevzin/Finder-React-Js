import React, { useState } from "react";

import {
  Container,
  ImageSlider,
  PrevButton,
  NextButton,
  YearCar,
  NameCar,
  Price,
  Locale,
  ImageCar,
  Description,
  DividerDescription,
  FooterCard,
  CardDetail,
} from "./styles";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";
import { TbDashboard, TbManualGearbox } from "react-icons/tb";

import PetrolIcon from "@assets/icons/petrol.svg";
import Badge from "../badge";
import FavoriteButton from "../favoriteButton";

const CardOffers = ({ carProps }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [moreImages, setMoreImages] = useState(false);

  function handleNextImage() {
    if (imageIndex == carProps[0]?.photos.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex(imageIndex + 1);
  }

  function handlePrevImage() {
    if (imageIndex == 0) {
      setImageIndex(carProps[0]?.photos.length - 1);
      return;
    }
    setImageIndex(imageIndex - 1);
  }

  if (carProps[0]?.photos.length > 1) {
    setMoreImages(true);
  }

  return (
    <Container>
      <ImageSlider>
        {moreImages && (
          <PrevButton onClick={() => handlePrevImage()}>
            <BsChevronLeft />
          </PrevButton>
        )}
        <Badge typeBadge={"usado"} />
        <ImageCar src={carProps[0]?.photos[imageIndex]} />
        <FavoriteButton />
        {moreImages && (
          <NextButton onClick={() => handleNextImage()}>
          <BsChevronRight />
        </NextButton>
        )}
      </ImageSlider>
      <Description>
        <YearCar>{carProps[0]?.year}</YearCar>
        <NameCar>{carProps[0]?.model}</NameCar>
        <Price>${carProps[0]?.price}</Price>
        <Locale>
          <RiMapPinLine />
          <p>{carProps[0]?.color}</p>
        </Locale>
        <DividerDescription />
        <FooterCard>
          <CardDetail>
            <TbDashboard />
            <span>{carProps[0]?.mileage}</span>
          </CardDetail>
          <CardDetail>
            <TbManualGearbox />
            <span>{carProps[0]?.additional[0]}</span>
          </CardDetail>
          <CardDetail>
            <img src={PetrolIcon} />
            <span>{carProps[0]?.fuel[0]}</span>
          </CardDetail>
        </FooterCard>
      </Description>
    </Container>
  );
};

export default CardOffers;
