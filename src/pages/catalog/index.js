import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

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
  Year,
  CarsUsed,
  Titulo,
  Order,
  SortyBy,
  WrapperCatalog,
  ContentListCards,
  HeaderFilterRight,
  ListCards,
  Test,
  ContainerErrorSearch,
} from "./styles";
import { useFinder } from "../../context/finder";
import LoadingScreen from "../loadingScreen";
import TypeButton from "../../components/typeButton";
import { apiFinder } from "../../service/api";

const Catalog = () => {
  const { filterParams, state } = useParams();
  const { finderProps } = useFinder();
  const [isLoading, setIsLoading] = useState(true);
  const [searchIsLoading, setSearchIsLoading] = useState(true);

  const [locationSelected, setLocationSelected] = useState("");
  const [brandSelected, setBrandSelected] = useState("");
  const [modelSelected, setModelSelected] = useState("");
  const [colorsSelected, setColorsSelected] = useState([]);
  const [carsSelected, setCarsSelected] = useState([]);
  const [dataResults, setDataResults] = useState({});
  const [conditionType, setConditionType] = useState("novo");
  const [idConditionType, setIdConditionType] = useState(0);
  const [carTypesSelected, setCarTypeSelected] = useState([]);
  const [carModelsSelected, setCarModelsSelected] = useState([]);
  const [fuelsSelected, setFuelsSelected] = useState([]);
  const [transmissionsSelected, setTransmissionsSelected] = useState([]);
  let pass = true;
  let filterObject = {};
  let i = 1;


  // if (filterParams != "all") {
  //   const filterRefactored =
  //     '{"' +
  //     filterParams
  //       .replace(/"/g, '\\"')
  //       .replace(/&/g, '","')
  //       .replace(/=/g, '":"') +
  //     '"}';
  //   filterObject = JSON.parse(filterRefactored);
  // }
  

  const orderSelected = [
    { value: "Relevante" },
    { value: "Mais novos" },
    { value: "Mais antigos" },
    { value: "Maior preço" },
    { value: "Menor preço" },
  ];

  async function handleConditionType(type) {
    setConditionType(type);
    const idCondition = finderProps?.conditions.find(
      (condition) => condition.value == type
    );
    setIdConditionType(idCondition.id);
  }

  function handleCheckLocation(value) {
    if (value != "") {
      setLocationSelected("location=" + value + "&");
      return;
    }
    if (value == "") {
      setLocationSelected("");
      return;
    }
  }

  async function handleCheckCarBrand(value) {
    if (value != "") {
      setBrandSelected("brand=" + value + "&");
      await apiFinder
        .get(`/adverts?brand=${value}`)
        .then((response) => setCarsSelected(response.data));
      return;
    }
    if (value == "") {
      setBrandSelected("");
      setModelSelected("");
      setCarsSelected([]);
      return;
    }
  }

  function handleCheckCarModel(value) {
    if (value != "") {
      setModelSelected("id=" + value + "&");
      return;
    }
    if (value == "") {
      setModelSelected("");
      return;
    }
  }

  function handleCheckCarType(value) {
    if (carTypesSelected.indexOf("carType=" + value + "&") == -1) {
      setCarTypeSelected([...carTypesSelected, "carType=" + value + "&"]);
      return;
    }
    if (
      carTypesSelected.filter((index) => index === "carType=" + value + "&")
    ) {
      let result = carTypesSelected.filter(
        (index) => index !== "carType=" + value + "&"
      );
      result == undefined && [];
      if (result === undefined) {
        result = [];
      }
      setCarTypeSelected(result);
      return;
    }
  }

  function handleCheckFuel(value) {
    if (fuelsSelected.indexOf("fuel=" + value + "&") == -1) {
      setFuelsSelected([...fuelsSelected, "fuel=" + value + "&"]);
      return;
    }
    if (fuelsSelected.filter((index) => index === "fuel=" + value + "&")) {
      let result = fuelsSelected.filter(
        (index) => index !== "fuel=" + value + "&"
      );
      result == undefined && [];
      if (result === undefined) {
        result = [];
      }
      setFuelsSelected(result);
      return;
    }
  }

  function handleCheckTransmissions(value) {
    if (transmissionsSelected.indexOf("transmission=" + value + "&") == -1) {
      setTransmissionsSelected([
        ...transmissionsSelected,
        "transmission=" + value + "&",
      ]);
      return;
    }
    if (
      transmissionsSelected.filter(
        (index) => index === "transmission=" + value + "&"
      )
    ) {
      let result = transmissionsSelected.filter(
        (index) => index !== "transmission=" + value + "&"
      );
      result == undefined && [];
      if (result === undefined) {
        result = [];
      }
      setTransmissionsSelected(result);
      return;
    }
  }
  function handleCheckColors(value) {
    if (colorsSelected.indexOf("color=" + value + "&") == -1) {
      setColorsSelected([...colorsSelected, "color=" + value + "&"]);
      return;
    }
    if (colorsSelected.filter((index) => index === "color=" + value + "&")) {
      let result = colorsSelected.filter(
        (index) => index !== "color=" + value + "&"
      );
      result == undefined && [];
      if (result === undefined) {
        result = [];
      }
      setColorsSelected(result);
      return;
    }
  }

  useEffect(() => {
    if (finderProps.hasOwnProperty("isLoading")) {
      setIsLoading(finderProps?.isLoading);
      setSearchIsLoading(finderProps?.isLoading);
    }
    handleConditionType(state);
  }, [finderProps]);

  useEffect(() => {

    async function getFilteredCars() {
      await apiFinder
        .get(
          `/adverts?${
            locationSelected +
            carModelsSelected +
            carTypesSelected +
            transmissionsSelected +
            fuelsSelected +
            colorsSelected +
            modelSelected +
            brandSelected
          }`
        )
        .then((response) => {
          setDataResults(response.data);
          setSearchIsLoading(false);
        });
    }
    getFilteredCars();
  }, [
    locationSelected,
    carModelsSelected,
    carTypesSelected,
    transmissionsSelected,
    fuelsSelected,
    colorsSelected,
    modelSelected,
    brandSelected,
  ]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.2 } }}
  >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Container>
          <Content>
            <Navbar />
            <WrapperCatalog>
              <ContentFilterCard>
                <ContainerFilters>
                  <ContainerButton>
                    <TypeButton
                      title={"Novo"}
                      isActive={conditionType === "novo"}
                      onClick={() => handleConditionType("novo")}
                    />
                    <TypeButton
                      title={"Usado"}
                      isActive={conditionType === "usado"}
                      onClick={() => handleConditionType("usado")}
                    />
                  </ContainerButton>
                  <hr />
                  <h1>Filtros</h1>
                  <hr />
                  <h1>Localização</h1>
                  <Select
                    placeholder={"Escolha o local"}
                    value={finderProps.locales}
                    onChange={(e) => handleCheckLocation(e.target.value)}
                  />
                  <h1>Tipo</h1>
                  <Checkbox
                    value={finderProps.carType}
                    onChange={(e) => handleCheckCarType(e.target.value)}
                  />
                  <h1>Marca e modelo</h1>
                  <Select
                    placeholder={"Marca"}
                    value={finderProps.brands}
                    onChange={(e) => handleCheckCarBrand(e.target.value)}
                  />
                  <Select
                    placeholder={"Modelo"}
                    value={carsSelected}
                    onChange={(e) => handleCheckCarModel(e.target.value)}
                  />
                  <h1>Ano</h1>
                  <Year>
                    <div>
                      <Select placeholder={"Todos"} value={finderProps.years} />
                    </div>
                    <hr />
                    <div>
                      <Select placeholder={"Todos"} value={finderProps.years} />
                    </div>
                  </Year>
                  <h1>Preço</h1>
                  <Year>
                    <div>
                      <Select placeholder={"Todos"} value={orderSelected} />
                    </div>
                    <hr />
                    <div>
                      <Select placeholder={"Todos"} value={orderSelected} />
                    </div>
                  </Year>
                  <h1>Preco negociado</h1>
                  <h1>Tipo de carro</h1>
                  <Checkbox value={finderProps.carModel} />
                  <h1>Combustível</h1>
                  <Checkbox
                    value={finderProps.fuel}
                    onChange={(e) => handleCheckFuel(e.target.value)}
                  />
                  <h1>Transmissão</h1>
                  <Checkbox
                    value={finderProps.transmission}
                    onChange={(e) => handleCheckTransmissions(e.target.value)}
                  />
                  <h1>Kilometragem</h1>
                  <Select placeholder={"Any"} value={finderProps.mileages} />
                  <h1>Cor</h1>
                  <Checkbox
                    value={finderProps.colors}
                    onChange={(e) => handleCheckColors(e.target.value)}
                  />
                </ContainerFilters>
              </ContentFilterCard>
              <ContentListCards>
                <HeaderFilterRight>
                  <CarsUsed>
                    <p>Home</p>
                    <div>
                      <img src={setaRigth} />
                    </div>
                    <h5>Carros {conditionType}s</h5>
                  </CarsUsed>
                  <Titulo>
                    <h1>Carros {conditionType}s</h1>
                  </Titulo>
                  <Order>
                    <div>
                      <img src={OrderImg} />
                    </div>
                    <h5>Ordenar:</h5>
                    <span>
                      <Select placeholder={"Newest"} value={orderSelected} />
                    </span>
                    <hr />
                    <div>
                      <img src={Direction} />
                    </div>
                    <h5>Comprar (0)</h5>
                  </Order>
                  <ListCards>
                    {dataResults.length > 0 ? (
                      dataResults?.map(
                        (car) =>
                          car?.condition == idConditionType && (
                            <Test key={i++}>
                              <CarCardCatalog
                                carProps={car}
                                finderProps={finderProps}
                              />
                            </Test>
                          )
                      )
                    ) : (
                      <ContainerErrorSearch>
                        <h2>Não foi encontrado nada</h2>
                        <h2>:'(</h2>
                      </ContainerErrorSearch>
                    )}
                  </ListCards>
                  <SortyBy>
                    <div>
                      <img src={OrderImg} />
                    </div>
                    <h5>Ordenar:</h5>
                    <span>
                      <Select placeholder={"Newest"} value={orderSelected} />
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
      )}
    </motion.div>
  );
};

export default Catalog;
