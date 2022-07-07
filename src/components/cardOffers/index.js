import React, { useContext, useEffect, useState } from "react";

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

import CardFuel from "../cardFuel";
import { Link } from "react-router-dom";
import { useFinder } from "../../context/finder";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const CardOffers = ({ carProps }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [moreImages, setMoreImages] = useState(true);
  const control = useAnimation();
  const [ref, inView] = useInView();

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

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const cardVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 }
  };

  return (
    <motion.div ref={ref} variants={cardVariant} initial="hidden" animate={control}>
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
            isCertified={carProps?.certified}
          />
          <ImageCar src={carProps?.photos[imageIndex]} />
          <FavoriteButton />
          {moreImages && (
            <NextButton onClick={() => handleNextImage()}>
              <BsChevronRight />
            </NextButton>
          )}
        </ImageSlider>
        <LinkCard to={"/detalhes/" + carProps?.id}>
          <Description>
            <YearCar>{carProps?.year}</YearCar>
            <NameCar>{carProps?.model}</NameCar>
            <Price>
              {carProps?.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Price>
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
                <span>{carProps?.mileage} km</span>
              </CardDetail>
              <CardDetail>
                <TbManualGearbox />
                <span>
                  {finderProps?.transmission[carProps?.transmission].value}
                </span>
              </CardDetail>
              <CardDetail>
                <CardFuel fuel={carProps?.fuel} />
              </CardDetail>
            </FooterCard>
          </Description>
        </LinkCard>
      </Container>
    </motion.div>
  );
};

export default CardOffers;
