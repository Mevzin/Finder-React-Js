import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import AcessoriosImage from "@assets/store/acessorios.png";
import BancosImage from "@/assets/store/bancos.png";
import PneusImage from "@assets/store/pneus.png";
import RodasImage from "@assets/store/rodas.png";
import SuspensaoImage from "@assets/store/suspensao.png";
import MotorImage from "@assets/store/motor.png";
import FarolImage from "@assets/store/farol.png";
import VelasImage from "@assets/store/velas.png";
import FerramentasImage from "@assets/store/ferramentas.png";
import VolanteImage from "@assets/store/volantes.png";

import { Container, Carousel, Info } from "./styles";

const Store = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            } 
        }
    ]
  };

  return (
    <Container>
      <Carousel>
        <Info>
            <h2>Loren Ipsum</h2>
            <p>Loren ipsun site amet</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">Ir para loja {<IoIosArrowForward />}</a>
        </Info>
        <Slider
          nextArrow={<IoIosArrowForward />}
          prevArrow={<IoIosArrowBack />}
          style={{ maxWidth: "746px" }}
          {...settings}
        >
          <div>
            <img src={BancosImage} alt="" />
            <h3>Bancos</h3>
          </div>
          <div>
            <img src={PneusImage} alt="" />
            <h3>Pneus</h3>
          </div>
          <div>
            <img src={RodasImage} alt="" />
            <h3>Rodas</h3>
          </div>
          <div>
            <img src={AcessoriosImage} alt="" />
            <h3>Acessórios</h3>
          </div>
          <div>
            <img src={SuspensaoImage} alt="" />
            <h3>Suspensão</h3>
          </div>
          <div>
            <img src={MotorImage} alt="" />
            <h3>Motor</h3>
          </div>
          <div>
            <img src={FarolImage} alt="" />
            <h3>Farol</h3>
          </div>
          <div>
            <img src={VelasImage} alt="" />
            <h3>Velas</h3>
          </div>
          <div>
            <img src={FerramentasImage} alt="" />
            <h3>Ferramentas</h3>
          </div>
          <div>
            <img src={VolanteImage} alt="" />
            <h3>Volantes</h3>
          </div>
        </Slider>
      </Carousel>
    </Container>
  );
};
export default Store;
