import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";

import {
  Carousel,
  WrapperTittle,
  Specifications,
  WrapperSpecifications,
  WrapperLeft,
  WrapperRight,
} from "./styles";

const CardDetails = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1656231909192-ead42fa7d43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
      description: "",
    },
    {
      src: "https://images.unsplash.com/photo-1656231909192-ead42fa7d43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
      description: "",
    },
    {
      src: "https://images.unsplash.com/photo-1656231909192-ead42fa7d43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
      description: "",
    },
  ];

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i].src} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <WrapperTittle>
        <h3>Mercedes-Benz E 400 Cabriolet</h3>
        <div>
          <FiHeart className="icon-heart" />
          <AiOutlineShareAlt />
        </div>
      </WrapperTittle>
      <WrapperSpecifications>
        <WrapperLeft>
          <Carousel>
            <Slider
              nextArrow={<IoIosArrowForward />}
              prevArrow={<IoIosArrowBack />}
              className="carousel-sustainability"
              style={{ maxWidth: "746px" }}
              {...settings}
            >
              {images.map((img, index) => (
                <div key={index} className="wrapper-carousel">
                  <div>
                    <img src={img.src} alt="abc" />
                  </div>
                  <p className="number-of-slides-details">
                    <HiOutlinePhotograph style={{ marginRight: "10px" }} />{" "}
                    {index + 1}/{images.length}
                  </p>
                </div>
              ))}
            </Slider>
          </Carousel>
          <Specifications>
            <span className="title">Especificações</span>
            <div>
              <strong>Ano: </strong>
              <span className="specifications-value">2020</span>
            </div>
            <div>
              <strong>Kilome: </strong>
              <span className="specifications-value">2020</span>
            </div>
            <div>
              <strong>Tipo: </strong>
              <span className="specifications-value">2020</span>
            </div>
            <div>
              <strong>Transmissão: </strong>
              <span className="specifications-value">2020</span>
            </div>
          </Specifications>
        </WrapperLeft>
        <WrapperRight>xxx</WrapperRight>
      </WrapperSpecifications>
    </div>
  );
};
export default CardDetails;
