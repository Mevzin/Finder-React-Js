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
  MostSearchHeader,
  MostSearchTitle,
  ViewAllResults,
  MostSearchContent
} from "./styles";

import { apiFinder } from "../../service/api";

import CardMostSearch from "../../components/cardMostSearch";

let i=1;

const Home = () => {

  const [models, setModels] = useState();

  async function getModels() {
    await apiFinder.get("/cartype")
      .then((response) => {
        setModels(response.data); 
      });
    
  }

  function autoGenKey(){
    i++
    return i;
  }

  useEffect(() => {
    getModels()
  },[]);
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
            <MostSearchHeader>
              <MostSearchTitle>
                <h2>Mais procurados</h2>
              </MostSearchTitle>
              <ViewAllResults>
                <p>Ver todos</p>
                <BsArrowRight />
              </ViewAllResults>
            </MostSearchHeader>
            <MostSearchContent>
              {models?.map((model) => <CardMostSearch key={autoGenKey()} carModel={model}/>)}
            </MostSearchContent>
          </MostSearchContainer>
        </Content>
      </Container>
    </>
  );
};

export default Home;
