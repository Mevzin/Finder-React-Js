import React from 'react';

import Navbar from '@components/navBar';

import CarImage from '@assets/car.png';

import {
  Container,
  BannerContainer,
  BannerText,
  BannerImage,
  BannerTitle,
  BannerParagraph,
} from './styles';

const Home = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Home;