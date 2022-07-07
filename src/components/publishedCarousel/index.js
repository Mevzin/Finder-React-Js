import React, { Component } from "react";
import Slider from "react-slick";

import Mazda from "@assets/cars/mazda.png";
import Bmw from "@assets/cars/bmw_640_Xi.png"; 
import Nissan from "@assets/cars/Nissan.jpg";
import Mustang from "@assets/cars/Mustang.jpg";
import Porsche from "@assets/cars/porsche-maca.jpg";
import Audi from "@assets/cars/audi.jpg";
import LandRover from "@assets/cars/land-rover.jpg";
import Peugeot from "@assets/cars/peugeot-3008.jpg";
import BmwM5 from "@assets/cars/bmw-m5.jpg";

import ArrowIcon from "@assets/icons/arrow.svg";
import Local from "@assets/place.png";
import Fuel from "@assets/fuel.png";
import Exchange from "@assets/exchange.png";
import Speedometer from "@assets/speedometer.png";

import {
  Container,
  TitlePublished,
  MenuPublish,
  ButtonsPublish,
  ButtonPublish,
  SeeaAll,
  ArrowImg,
  CardPublish,
  CheckboxCard,
  Modelyear,
  NewTitle,
  NewEdge,
  UsedEdge,
  CarTitle,
  InputCheckbox,
  CardPrice,
  Place,
  PlaceTitle,
  VerticalLine,
  CarInfo,
  InfoContainer,
  InfoTitle,
  CardPublishImg,

} from "./styles";

const PublishedCarousel = () => {

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

  return (
    <>
      <Container>
      <MenuPublish>
      <TitlePublished>Ultimos publicados</TitlePublished>
        <ButtonsPublish>
          <ButtonPublish>Novo</ButtonPublish>
          <ButtonPublish>Usado</ButtonPublish>
          <SeeaAll>Ver todos</SeeaAll>
          <ArrowImg src={ArrowIcon}/>
        </ButtonsPublish>         
        </MenuPublish>
        <Slider {...settings}>
          <CardPublish>
              <CardPublishImg src={Mazda}/>
            <NewEdge>
              <NewTitle>Novo</NewTitle>
            </NewEdge>
            <Modelyear>
              <p id="data">2019</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar"> Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>Mazda MX-5 Miata Convertible</CarTitle>
            <CardPrice>$38,500</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>Los Angeles</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>18k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Manual</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={Bmw}/>
            <UsedEdge>
              <NewTitle>Usado</NewTitle>
            </UsedEdge>
            <Modelyear>
              <p id="data">2019</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar">Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>BMW 640 XI Gran Turismo</CarTitle>
            <CardPrice>$44,920</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>New Jersey</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>10k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Automático</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={Nissan}/>
            <UsedEdge>
              <NewTitle>Usado</NewTitle>
            </UsedEdge>
            <Modelyear>
              <p id="data">2019</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar">Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>Nissan 370Z Nismo </CarTitle>
            <CardPrice>$37,900</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>New York</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>16k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Manual</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Diesel</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={Mustang}/>
            <NewEdge>
              <NewTitle>Novo</NewTitle>
            </NewEdge>
            <Modelyear>
              <p>2018</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar"> Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>FORD MUSTANG</CarTitle>
            <CardPrice>$393,900</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>São Paulo</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>18k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Automático</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={Porsche}/>
            <NewEdge>
              <NewTitle>Novo</NewTitle>
            </NewEdge>
            <Modelyear>
              <p id="data">2019</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar"> Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>PORSCHE MACAN</CarTitle>
            <CardPrice>$459,990</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>Recife, PE</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>17k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Automático</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={Audi}/>
            <NewEdge>
              <NewTitle>Novo</NewTitle>
            </NewEdge>
            <Modelyear>
              <p id="data">2019</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar"> Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>AUDI A3</CarTitle>
            <CardPrice>$115,990</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>Rio de Janeiro</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>18k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Automático</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={LandRover}/>
            <NewEdge>
              <NewTitle>Novo</NewTitle>
            </NewEdge>
            <Modelyear>
              <p id="data">2020</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar"> Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>LAND ROVER RANGE ROVER SPORT</CarTitle>
            <CardPrice>$869,900</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>Santos, SP</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>29k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Automático</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={Peugeot}/>
            <NewEdge>
              <NewTitle>Novo</NewTitle>
            </NewEdge>
            <Modelyear>
              <p id="data">2020</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar"> Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>PEUGEOT 3008</CarTitle>
            <CardPrice>$179,990</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>São paulo</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>27k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Automático</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
          <CardPublish>
            <CardPublishImg src={BmwM5}/>
            <UsedEdge>
              <NewTitle>Usado</NewTitle>
            </UsedEdge>
            <Modelyear>
              <p id="data">2014</p>
              <CheckboxCard>
                <InputCheckbox name="comprar" id="comprar" type="checkbox" />
                <label id="tituloCheckbox" for="comprar"> Compare</label>
              </CheckboxCard>
            </Modelyear>
            <CarTitle>BMW M5</CarTitle>
            <CardPrice>$274,900</CardPrice>
            <Place>
              <img src={Local} />
              <PlaceTitle>Campinas, SP</PlaceTitle>
            </Place>
            <VerticalLine />
            <CarInfo>
              <InfoContainer>
                <img  src={Speedometer} />
                <InfoTitle>22k mi</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Exchange} />
                <InfoTitle>Manual</InfoTitle>
              </InfoContainer>
              <InfoContainer>
                <img  src={Fuel} />
                <InfoTitle>Gasolina</InfoTitle>
              </InfoContainer>
            </CarInfo>  
          </CardPublish>
        </Slider>
      </Container>
    </>
  );
};

export default PublishedCarousel;
