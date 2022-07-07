import React, { useEffect, useState } from "react";

import { apiFinder } from "../../service/api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AvatarImage from "@assets/avatar_user.png";
import CheckGradient from "@assets/check_gradient.png";
import SteeringWwheelGradient from "@assets/steering-wheel_gradient.png";
import DrivingTestGradient from "@assets/driving-test_gradient.png";
import AccidentGradient from "@assets/accident_gradient.png";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  HiOutlinePhotograph,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import { FiHeart, FiPhoneCall } from "react-icons/fi";
import { AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { TbDashboard } from "react-icons/tb";

import {
  Container,
  Breadcrumb,
  Carousel,
  WrapperTittle,
  Specifications,
  WrapperSpecifications,
  WrapperLeft,
  WrapperRight,
  KmLocation,
  Divider,
  SellerInformation,
  UserClassification,
  Phone,
  SendEmail,
  Newsletter,
  Input,
  WrapperOthersDetails,
  Stamp,
  SellerDescription,
  Published,
  ButtonsImages,
} from "./styles";
import { useFinder } from "../../context/finder";
import { useParams } from "react-router";
import LoadingScreen from "../../pages/loadingScreen";
import { motion } from "framer-motion";
import CarNotExist from "../carNotExist";

const CardDetails = () => {
  const [car, setCar] = useState();
  const [isLoader, setIsLoader] = useState(true);
  const [isLoaderFinder, setIsLoaderFinder] = useState(true);
  const [isLoaderCar, setIsLoaderCar] = useState(true);
  const [carNotExist, setCarNotExist] = useState(false);
  const { finderProps } = useFinder();
  const { idCar } = useParams(undefined);

  console.log("car", car);
  console.log("finder", finderProps);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <ButtonsImages {...props} type="button">
      <IoIosArrowBack />
    </ButtonsImages>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <ButtonsImages {...props} type="button">
      <IoIosArrowForward />
    </ButtonsImages>
  );

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={car?.photos[i]} />
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
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  useEffect(() => {
    if (idCar != undefined) {
      apiFinder
        .get(`/adverts?id=${idCar}`)
        .then((res) => res)
        .then(
          (result) => {
            setCar(result.data[0]);
            setIsLoaderCar(false);
          },
          (error) => {
            console.log("error >>> ", error);
          }
        );
    }
  }, [idCar]);

  useEffect(() => {
    console.log("entrou no effect");
    if (finderProps.hasOwnProperty("isLoading")) {
      setIsLoaderFinder(false);
      console.log("entrou na segunda");
    }
    if (isLoaderFinder == false && isLoaderCar == false) {
      console.log("entrou na primeira");
      setIsLoader(false);
    }
    if (isLoaderFinder == false && isLoaderCar == false && car === undefined){
      setCarNotExist(true);
    }
  }, [isLoaderCar, isLoaderFinder, finderProps, car]);

  return (
    <Container>
      {!isLoader ? (
        <>
          {carNotExist ? (
            <>
              <CarNotExist />
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <Breadcrumb>
                  <div>Home</div> <IoIosArrowForward /> <div>Usados</div>
                  <IoIosArrowForward /> <p>{car.model}</p>
                </Breadcrumb>
                <WrapperTittle>
                  <h3>{car.model}</h3>
                  <div>
                    <FiHeart className="icon-heart" />
                    <AiOutlineShareAlt />
                  </div>
                </WrapperTittle>
                <WrapperSpecifications>
                  <WrapperLeft>
                    <Carousel>
                      <Slider
                        className="carousel-sustainability"
                        style={{ maxWidth: "746px" }}
                        {...settings}
                      >
                        {car?.photos.map((img, index) => (
                          <div key={index} className="wrapper-carousel">
                            <div>
                              <img src={img} alt="abc" />
                            </div>
                            <p className="number-of-slides-details">
                              <HiOutlinePhotograph
                                style={{ marginRight: "10px" }}
                              />{" "}
                              {index + 1}/{car?.photos.length}
                            </p>
                          </div>
                        ))}
                      </Slider>
                    </Carousel>
                    <Specifications>
                      <span className="title">Especificações</span>
                      <div>
                        <strong>Ano: </strong>
                        <span className="specifications-value">{car.year}</span>
                      </div>
                      <div>
                        <strong>Kilome: </strong>
                        <span className="specifications-value">
                          {car.mileage} km
                        </span>
                      </div>
                      <div>
                        <strong>Tipo: </strong>
                        <span className="specifications-value">
                          {finderProps?.carType[car?.carType].value}
                        </span>
                      </div>
                      <div>
                        <strong>Transmissão: </strong>
                        <span className="specifications-value">
                          {finderProps?.transmission[car?.transmission].value}
                        </span>
                      </div>
                    </Specifications>
                  </WrapperLeft>
                  <WrapperRight>
                    <h3>
                      {car.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h3>
                    <KmLocation>
                      <div className="km">
                        <TbDashboard />
                        {car?.mileage} km
                      </div>
                      <Divider />
                      <div>
                        <HiOutlineLocationMarker />
                        {finderProps?.locales[car?.location].value}
                      </div>
                    </KmLocation>
                    <SellerInformation>
                      <span>Vendedor particular</span>
                      <UserClassification>
                        <img src={AvatarImage} />
                        <div>
                          <h5>Usuário</h5>
                          <div className="star">
                            <AiFillStar /> (5 reviews)
                          </div>
                        </div>
                      </UserClassification>
                      <span className="underline">
                        Other ads by this seller
                      </span>

                      <Phone>
                        <FiPhoneCall />
                        (11) *** ****
                      </Phone>
                      <SendEmail>
                        <HiOutlineMail />
                        Enviar email
                      </SendEmail>
                    </SellerInformation>
                    <Newsletter>
                      <h5>
                        Envie-me por e-mail quedas de preços e novas listagens
                        para estes resultados de pesquisa:
                      </h5>
                      <Input>
                        <HiOutlineMail />
                        <input type="text" placeholder="Email" />
                        <a href="#">Subscribe</a>
                      </Input>
                      <div className="checkbox">
                        <div>
                          <input type="checkbox" name="check-box" />{" "}
                        </div>
                        <span>
                          Concordo em receber alertas de queda de preço neste
                          veículo e informações úteis sobre compras.
                        </span>
                      </div>
                    </Newsletter>
                  </WrapperRight>
                </WrapperSpecifications>
                <WrapperOthersDetails>
                  <Stamp>
                    <div>
                      <img src={CheckGradient} alt="icon check" />
                      <span>Verificado e certificado pelo Finder</span>
                    </div>
                    <div>
                      <img src={SteeringWwheelGradient} alt="icon volante" />
                      <span>Único dono</span>
                    </div>
                    <div>
                      <img src={DrivingTestGradient} alt="icon check lista" />
                      <span>Bem equipado</span>
                    </div>
                    <div>
                      <img src={AccidentGradient} alt="icon carro em colisão" />
                      <span>Nenhum acidente/ dano relatado</span>
                    </div>
                  </Stamp>
                  <SellerDescription>
                    <h4>Descrição do vendedor</h4>
                    <div>
                      <p>
                        Lorem tincidunt lectus vitae id vulputate diam quam.
                        Imperdiet non scelerisque turpis sed etiam ultrices.
                        Blandit mollis dignissim egestas consectetur porttitor.
                        Vulputate dolor pretium, dignissim eu augue sit ut
                        convallis. Lectus est, magna urna feugiat sed ultricies
                        sed in lacinia. Fusce potenti sit id pharetra vel
                        ornare. Vestibulum sed tellus ullamcorper arcu.{" "}
                      </p>
                      <a href="">Veja mais</a>
                    </div>
                  </SellerDescription>
                  <Published>
                    <div>Publicado: Abril, 2020</div>
                    <Divider />
                    <div>Numero do anuncio: 681013232</div>
                    <Divider />
                    <div>Visualizações: 48</div>
                  </Published>
                </WrapperOthersDetails>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <LoadingScreen />
      )}
    </Container>
  );
};
export default CardDetails;
