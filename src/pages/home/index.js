import React, { useEffect, useState } from 'react';

import Navbar from '@components/navBar';

import CarImage from '@assets/car.png';
import ShapeImage from '@assets/shape.png';
import HorizontalFilter from '../../components/horizontalFilter';

import {
  Container,
  Content,
  BannerContainer,
  BannerText,
  BannerImage,
  BannerTitle,
  BannerParagraph,
  ShapeImg,

} from './styles';

import { apiFinder } from '../../service/api';

const Home = () => {

  return (
    <>
    <ShapeImg src={ShapeImage}/>
    <Container>
      <Content>
      <Navbar />
      <BannerContainer>
        <BannerText>
          <BannerTitle>
            Compre e Venda com facilidade.
          </BannerTitle>
          <BannerParagraph>
            O finder é um mercado digital líder para a
            indústria automotiva que conecta compradores
            de carros e vendedores.
          </BannerParagraph>
        </BannerText>
        <BannerImage src={CarImage} />
      </BannerContainer>
      <HorizontalFilter />
      </Content>
    </Container>
    </>
  );
};

export default Home;