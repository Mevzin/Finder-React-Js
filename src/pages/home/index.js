import React, { useEffect, useState } from "react";

import { apiFinder } from "@services/api";

import CarImage from "@assets/car.png";
import ShapeImage from "@assets/shape.png";
import CarRoadIcon from "@assets/icons/autoAndRoad.svg";

import Navbar from "@components/navBar";
import HorizontalFilter from "@components/horizontalFilter";
import CardMostSearch from "@components/cardMostSearch";
import CardOffers from "@components/cardOffers";
import CardOffersMd from "@components/cardOffersMd";
import Brands from "@components/brands";

import { BsArrowRight } from "react-icons/bs";
import {
  TbFileText,
  TbSettings,
  TbSearch,
  TbInfoCircle,
  TbUsers,
  TbCalculator,
} from "react-icons/tb";

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
  CardsContainer,
  MainCard,
  SecondaryCard,
  InfoContainer,
  InfoContent,
  FirstTextColum,
  SecondTextColum,
  CarRoadImg,
  FirstContentParagraphs,
  FirstParagraphText,
  SecondContentParagraphs,
  SecondParagraphText,
  LinkRedirect,
} from "./styles";
import Footer from "../../components/footer";
import { useFinder } from "../../context/finder";
import LoadingScreen from "../loadingScreen";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { finderProps } = useFinder();

  useEffect(() => {
    if (finderProps.hasOwnProperty("isLoading")) {
      setIsLoading(finderProps?.isLoading);
    }
  }, [finderProps]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ShapeImg src={ShapeImage} />
          <Container>
            <Content>
              <Navbar />
              <BannerContainer>
                <BannerText>
                  <BannerTitle>Compre e Venda com facilidade.</BannerTitle>
                  <BannerParagraph>
                    O finder é um mercado digital líder para a indústria
                    automotiva que conecta compradores de carros e vendedores.
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
                  <LinkRedirect to={"/catalogo/new/all"}>
                    <ViewAllResults>
                      <p>Ver todos</p>
                      <BsArrowRight />
                    </ViewAllResults>
                  </LinkRedirect>
                </HeaderSection>
                <MostSearchContent>
                  {finderProps.hasOwnProperty("carType") &&
                    finderProps?.carType.map((model) => (
                      <CardMostSearch
                        key={model.id}
                        carModel={model.value}
                        idModel={model.id}
                      />
                    ))}
                </MostSearchContent>
              </MostSearchContainer>
              <OffersContainer>
                <HeaderSection>
                  <TitleSection>
                    <h2>Ofertas</h2>
                  </TitleSection>
                  <LinkRedirect to={"/catalogo/any/all"}>
                    <ViewAllResults>
                      <p>Ver todas as ofertas</p>
                      <BsArrowRight />
                    </ViewAllResults>
                  </LinkRedirect>
                </HeaderSection>
                <CardsContainer>
                  <MainCard>
                    <CardOffers
                      carProps={
                        finderProps.hasOwnProperty("cars") &&
                        finderProps.cars[0]
                      }
                    />
                  </MainCard>
                  <SecondaryCard>
                    <CardOffersMd
                      carProps={
                        finderProps.hasOwnProperty("cars") &&
                        finderProps.cars[1]
                      }
                    />
                    <CardOffersMd
                      carProps={
                        finderProps.hasOwnProperty("cars") &&
                        finderProps.cars[1]
                      }
                    />
                  </SecondaryCard>
                </CardsContainer>
              </OffersContainer>
              <Brands />
              <InfoContainer>
                <HeaderSection>
                  <TitleSection>
                    <h2>O que temos de diferente</h2>
                  </TitleSection>
                  <ViewAllResults>
                    <p>Como vender carros no Finder</p>
                    <BsArrowRight />
                  </ViewAllResults>
                </HeaderSection>
                <InfoContent>
                  <FirstTextColum>
                    <FirstParagraphText>
                      <TbFileText />
                      <FirstContentParagraphs>
                        <h3>Loren Ipsun</h3>
                        <p>
                          That’s more than you’ll find on any other major online
                          automotive marketplace in the USA.
                        </p>
                      </FirstContentParagraphs>
                    </FirstParagraphText>
                    <FirstParagraphText>
                      <TbSearch />
                      <FirstContentParagraphs>
                        <h3>Loren Ipsun</h3>
                        <p>
                          Our powerful search makes it easy to personalize your
                          results so you only see the cars and features you care
                          about.
                        </p>
                      </FirstContentParagraphs>
                    </FirstParagraphText>
                    <FirstParagraphText>
                      <TbSettings />
                      <FirstContentParagraphs>
                        <h3>Loren Ipsun</h3>
                        <p>
                          Our team is constantly developing new features that
                          make the process of buying and selling a car simpler.
                        </p>
                      </FirstContentParagraphs>
                    </FirstParagraphText>
                  </FirstTextColum>
                  <CarRoadImg src={CarRoadIcon} />
                  <SecondTextColum>
                    <SecondParagraphText>
                      <TbInfoCircle />
                      <SecondContentParagraphs>
                        <h3>Loren Ipsun</h3>
                        <p>
                          That’s more than you’ll find on any other major online
                          automotive marketplace in the USA.
                        </p>
                      </SecondContentParagraphs>
                    </SecondParagraphText>
                    <SecondParagraphText>
                      <TbUsers />
                      <SecondContentParagraphs>
                        <h3>Loren Ipsun</h3>
                        <p>
                          Our powerful search makes it easy to personalize your
                          results so you only see the cars and features you care
                          about.
                        </p>
                      </SecondContentParagraphs>
                    </SecondParagraphText>
                    <SecondParagraphText>
                      <TbCalculator />
                      <SecondContentParagraphs>
                        <h3>Loren Ipsun</h3>
                        <p>
                          Our team is constantly developing new features that
                          make the process of buying and selling a car simpler.
                        </p>
                      </SecondContentParagraphs>
                    </SecondParagraphText>
                  </SecondTextColum>
                </InfoContent>
              </InfoContainer>
            </Content>
            <Footer />
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
