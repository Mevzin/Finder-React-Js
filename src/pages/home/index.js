import React, { useEffect, useState } from "react";

import Navbar from "@components/navBar";

import CarImage from "@assets/car.png";
import ShapeImage from "@assets/shape.png";
import HorizontalFilter from "../../components/horizontalFilter";

import { BsArrowRight } from "react-icons/bs";

import {
  Container,
  Content,
  BannerContainer,
  BannerText,
  BannerImage,
  BannerTitle,
  BannerParagraph,
  ShapeImg,
  MostSearchContainer,
  HeaderSection,
  TitleSection,
  ViewAllResults,
  MostSearchContent,
  OffersContainer,
  HeaderOffers,
  CardsContainer,
  MainCard,
  SecondaryCard,
} from "./styles";

import { apiFinder } from "../../service/api";

import CardMostSearch from "../../components/cardMostSearch";
import CardOffers from "../../components/cardOffers";
import CardOffersMd from "../../components/cardOffersMd";

let i = 1;

const car = [{
    "id": 0,
    "model": "Fiat Uno",
    "version": "Vivace",
    "brand": 2,
    "price": "41.999",
    "year": 2020,
    "description": "Fiat uno...",
    "mileage": "até 10.000 km",
    "cartype": "Hatback",
    "color": "Branco",
    "photos": [
      "https://images.noticiasautomotivas.com.br/img/f/fiat-uno-vivace-1-9.jpeg"
    ],
    "additional": [
      "Transmissão manual",
      "Freio ABS",
      "Air Bag"
    ],
    "fuel": [
      "Alcool",
      "Gasolina",
      "Flex"
    ]
}]

const Home = () => {
  const [models, setModels] = useState();
  const [cars, setCars] = useState([]);

  async function getModels() {
    await apiFinder.get("/cartype").then((response) => {
      setModels(response.data);
    });
  }

  async function getCars() {
    await apiFinder.get("/adverts").then((response) => {
      setCars(response.data);
    });
  }

  function autoGenKey() {
    i++;
    return i;
  }

  useEffect(() => {
    getModels(),
    getCars()
  }, []);
  return (
    <>
      <ShapeImg src={ShapeImage} />
      <Container>
        <Content>
          <Navbar />
          <BannerContainer>
            <BannerText>
              <BannerTitle>Compre e Venda com facilidade.</BannerTitle>
              <BannerParagraph>
                O finder é um mercado digital líder para a indústria automotiva
                que conecta compradores de carros e vendedores.
              </BannerParagraph>
            </BannerText>
            <BannerImage src={CarImage} />
          </BannerContainer>
          <HorizontalFilter />
          <MostSearchContainer>
            <HeaderSection>
              <TitleSection>
                <h2>Mais procurados</h2>
              </TitleSection>
              <ViewAllResults>
                <p>Ver todos</p>
                <BsArrowRight />
              </ViewAllResults>
            </HeaderSection>
            <MostSearchContent>
              {models?.map((model) => (
                <CardMostSearch key={autoGenKey()} carModel={model} />
              ))}
            </MostSearchContent>
          </MostSearchContainer>
          <OffersContainer>
            <HeaderSection>
              <TitleSection>
                <h2>Ofertas</h2>
              </TitleSection>
              <ViewAllResults>
                <p>Ver todas as ofertas</p>
                <BsArrowRight />
              </ViewAllResults>
            </HeaderSection>
            <CardsContainer>
              <MainCard>
                <CardOffers 
                  cardOptions={[
                    'large',
                    'sale',
                  ]}
                  carProps={cars}
                  />
              </MainCard>
              <SecondaryCard>
                <CardOffersMd carProps={cars}/>
                <CardOffersMd carProps={cars}/>
              </SecondaryCard>
            </CardsContainer>
          </OffersContainer>
        </Content>
      </Container>
    </>
  );
};

export default Home;
