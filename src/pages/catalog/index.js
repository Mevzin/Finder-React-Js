import React from "react";
import { useParams } from "react-router";

import CarCardCatalog from "@components/carCardCatalog";

import setaRigth from "@assets/icons/setaRight.png";
import OrderImg from "@assets/icons/order.png";
import Direction from "@assets/icons/direction.png";

import Navbar from "@components/navBar";
import Select from "@components/select";
import Checkbox from "@components/checkbox";
import Footer from "@components/footer";

import {
  Container,
  Content,
  ContentFilterCard,
  ContainerFilters,
  ContainerButton,
  ButtonNewCars,
  ButtonUsedCars,
  Year,
  CarsUsed,
  Titulo,
  Order,
  SortyBy,
  WrapperCatalog,
  ContentListCards,
  HeaderFilterRight,
  ListCards,
} from "./styles";
const Catalog = () => {
  const { idparams } = useParams();
  console.log(idparams);

  const selectTeste = [
    { value: "São Paulo" },
    { value: "Rio de Janeiro" },
    { value: "Minas Gerais" },
    { value: "São Paulo" },
    { value: "Rio de Janeiro" },
    { value: "Minas Gerais" },
    { value: "São Paulo" },
    { value: "Rio de Janeiro" },
    { value: "Minas Gerais" },
  ];

  const selectTeste1 = [
    { value: "Volvo" },
    { value: "Mercedes" },
    { value: "BMW" },
  ];
  return (
    <>
      <Container>
        <Content>
          <Navbar />
          <WrapperCatalog>
            <ContentFilterCard>
              <ContainerFilters>
                <ContainerButton>
                  <ButtonNewCars>Novo</ButtonNewCars>
                  <ButtonUsedCars>Usado</ButtonUsedCars>
                </ContainerButton>
                <hr />
                <h1>Filtros</h1>
                <hr />
                <h1>Localização</h1>
                <Select value={selectTeste} />
                <h1>Tipo</h1>
                <Checkbox value={selectTeste} />
                <h1>Marca e modelo</h1>
                <Select value={selectTeste1} />
                <Select value={selectTeste1} />
                <h1>Ano</h1>
                <Year>
                  <div>
                    <Select value={selectTeste1} />
                  </div>
                  <hr />
                  <div>
                    <Select value={selectTeste1} />
                  </div>
                </Year>
                <h1>Preco negociado</h1>
                <h1>Tipo de carro</h1>
                <Checkbox value={selectTeste} />
                <h1>Combustível</h1>
                <Checkbox value={selectTeste} />
                <h1>Transmissão</h1>
                <Checkbox value={selectTeste} />
                <h1>Kilometragem</h1>
                <Select value={selectTeste} />
                <h1>Cor</h1>
                <Checkbox value={selectTeste} />
              </ContainerFilters>
            </ContentFilterCard>
            <ContentListCards>
              <HeaderFilterRight>
                <CarsUsed>
                  <p>Home</p>
                  <div>
                    <img src={setaRigth} />
                  </div>
                  <h5>Carros usados</h5>
                </CarsUsed>
                <Titulo>
                  <h1>Carros Usados</h1>
                </Titulo>
                <Order>
                  <div>
                    <img src={OrderImg} />
                  </div>
                  <h5>Ordernar:</h5>
                  <span>
                    <Select value={selectTeste} />
                  </span>
                  <hr />
                  <div>
                    <img src={Direction} />
                  </div>
                  <h5>Comprar (0)</h5>
                </Order>
                <ListCards>
                  <CarCardCatalog />
                </ListCards>
                <SortyBy>
                  <div>
                    <img src={OrderImg} />
                  </div>
                  <h5>Ordernar:</h5>
                  <span>
                    <Select value={selectTeste} />
                  </span>
                  <hr />
                  <div>
                    <img src={Direction} />
                  </div>
                  <h5>Comprar (0)</h5>
                </SortyBy>
              </HeaderFilterRight>
            </ContentListCards>
          </WrapperCatalog>
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default Catalog;
