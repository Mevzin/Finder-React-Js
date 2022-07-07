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
import Store from "@components/store";
import PublishedCarousel from "@components/publishedCarousel";

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
  LastNewsContainer,
  LastNewsContent,
} from "./styles";
import Footer from "../../components/footer";
import { useFinder } from "../../context/finder";
import LoadingScreen from "../loadingScreen";
import CardLastNews from "../../components/cardLastNews";
import ImagePost1 from "@assets/imageCard1.png";
import ImageProfile1 from "@assets/imageProfile1.png";
import ImagePost2 from "@assets/imageCard2.png";
import ImageProfile2 from "@assets/imageProfile2.png";
import ImagePost3 from "@assets/imageCard3.png";
import ImageProfile3 from "@assets/imageProfile3.png";
import ImageIlustration from "@assets/illustration.png";
import ImageGoogleIcon from "@assets/googleplay.png";
import ImageAppleIcon from "@assets/appstore.png";
import {
  ButtonsDown,
  DownloadAppContainer,
  ImageArea,
  TextArea,
  TextDown,
  TitleDown,
} from "../../components/cardLastNews/styles";

import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { finderProps } = useFinder();

  useEffect(() => {
    if (finderProps.hasOwnProperty("isLoading")) {
      setIsLoading(finderProps?.isLoading);
    }
  }, [finderProps]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition= {{ duration: 0.6 }}
    >
      <ShapeImg src={ShapeImage} />
      <Container>
        <Content>
          <Navbar />
          <BannerContainer>
            <motion.div
              initial={{ x: -window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: -window.innerWidth }}
              transition= {{ duration: 0.6 }}

            >
              <BannerText>
                <BannerTitle>Compre e Venda com facilidade.</BannerTitle>
                <BannerParagraph>
                  O finder é um mercado digital líder para a indústria
                  automotiva que conecta compradores de carros e vendedores.
                </BannerParagraph>
              </BannerText>
            </motion.div>
            <motion.div
              style={{ zIndex: 2 }}
              initial={{
                x: window.innerWidth,
                opacity: 0,
              }}
              transition={{ duration: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: window.innerWidth,
                opacity: 0,
              }}
            >
              <BannerImage src={CarImage} />
            </motion.div>
          </BannerContainer>
          {isLoading ? <LoadingScreen /> : <HorizontalFilter />}
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
              {isLoading ? (
                <LoadingScreen />
              ) : (
                <>
                  {finderProps.hasOwnProperty("carType") &&
                    finderProps?.carType.map((model) => (
                      <CardMostSearch
                        key={model.id}
                        carModel={model.value}
                        idModel={model.id}
                      />
                    ))}
                </>
              )}
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
              {isLoading ? (
                <LoadingScreen />
              ) : (
                <>
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
                        finderProps.cars[2]
                      }
                    />
                  </SecondaryCard>
                </>
              )}
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
                      Our team is constantly developing new features that make
                      the process of buying and selling a car simpler.
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
                      Our team is constantly developing new features that make
                      the process of buying and selling a car simpler.
                    </p>
                  </SecondContentParagraphs>
                </SecondParagraphText>
              </SecondTextColum>
            </InfoContent>
          </InfoContainer>
          <PublishedCarousel />
          <Store />
          <DownloadAppContainer>
            <TextArea>
              <TitleDown>Baixe o nosso app</TitleDown>
              <TextDown>
                Baixe o Finder App e junte-se à comunidade de entusiastas de
                carros. Não pare sua busca de carro quando sair do computador
                com nosso aplicativo para Android e iOS!
              </TextDown>
              <ButtonsDown>
                <img src={ImageAppleIcon} />
                <img src={ImageGoogleIcon} />
              </ButtonsDown>
            </TextArea>
            <ImageArea>
              <img src={ImageIlustration} />
            </ImageArea>
          </DownloadAppContainer>
          <LastNewsContainer>
            <HeaderSection>
              <TitleSection>
                <h2>Ultimas Novidades</h2>
              </TitleSection>
              <ViewAllResults>
                <p>Vá até o blog</p>
                <BsArrowRight />
              </ViewAllResults>
            </HeaderSection>
            <LastNewsContent>
              <CardLastNews
                imageSrc={ImagePost1}
                badge={"DICAS"}
                text={"Loren ipsuns"}
                profileImage={ImageProfile1}
                nameProfile={"Jacob Jones"}
                datePost={"24 de Nov"}
              />
              <CardLastNews
                imageSrc={ImagePost2}
                badge={"OFERTAS"}
                text={"Loren ipsuns"}
                profileImage={ImageProfile2}
                nameProfile={"Annette Black"}
                datePost={"28 de Nov"}
              />
              <CardLastNews
                imageSrc={ImagePost3}
                badge={"ORFERTAS"}
                text={"Loren ipsuns"}
                profileImage={ImageProfile3}
                nameProfile={"Ralph Edwards"}
                datePost={"15 de dez"}
              />
            </LastNewsContent>
          </LastNewsContainer>
        </Content>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Home;
