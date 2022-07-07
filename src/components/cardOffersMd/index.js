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
  LinkCard,
} from "./styles";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";
import { TbDashboard, TbManualGearbox } from "react-icons/tb";

import Badge from "../badge";
import FavoriteButton from "../favoriteButton";
import { useFinder } from "../../context/finder";
import CardFuel from "../cardFuel";

const CardOffersMd = ({ carProps }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [moreImages, setMoreImages] = useState(true);
  const { finderProps } = useFinder();

  function handleNextImage() {
    if (imageIndex == carProps?.photos.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex(imageIndex + 1);
  }

  function handlePrevImage() {
    if (imageIndex == 0) {
      setImageIndex(carProps?.photos.length - 1);
      return;
    }
    setImageIndex(imageIndex - 1);
  }

  // if (carProps?.photos.length > 1) {
  //   setMoreImages(true);
  // }

  return (
    <Container>
      <ImageSlider>
        {moreImages && (
          <PrevButton onClick={() => handlePrevImage()}>
            <BsChevronLeft />
          </PrevButton>
        )}
        <Badge
          typeBadge={
            finderProps.hasOwnProperty("conditions") &&
            finderProps?.conditions[carProps?.condition].value
          }
        />
        <ImageCar src={carProps?.photos[imageIndex]} />
        <FavoriteButton />
        {moreImages && (
          <NextButton onClick={() => handleNextImage()}>
            <BsChevronRight />
          </NextButton>
        )}
      </ImageSlider>
      <LinkCard to={"/detalhes/carId=" + carProps?.id}>
        <Description>
          <YearCar>{carProps?.year}</YearCar>
          <NameCar>{carProps?.model}</NameCar>
          <Price>${carProps?.price}</Price>
          <Locale>
            <RiMapPinLine />
            <p>
              {finderProps !== {} &&
                finderProps?.locales[carProps?.location].value}
            </p>
          </Locale>
          <DividerDescription />
          <FooterCard>
            <CardDetail>
              <TbDashboard />
              <span>{carProps?.mileage}</span>
            </CardDetail>
            <CardDetail>
              <TbManualGearbox />
              <span>{carProps?.additional[0]}</span>
            </CardDetail>
            <CardDetail>
              <CardFuel fuel={carProps?.fuel} />
            </CardDetail>
          </FooterCard>
        </Description>
      </LinkCard>
    </Container>
  );
};

export default CardOffersMd;
