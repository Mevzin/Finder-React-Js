import { useEffect, useState } from "react";
import { apiFinder } from "../service/api";


export default function useGetFinderProps() {
  const [brands, setBrands] = useState({});
  const [colors, setColors] = useState({});
  const [fuel, setFuel] = useState({});
  const [conditions, setConditions] = useState({});
  const [carType, setCarType] = useState({});
  const [additional, setAdditional] = useState({});
  const [locales, setLocales] = useState({});
  const [mileages, setMileages] = useState({});
  const [transmission, setTransmission] = useState({});

  useEffect(() => {
    async function getBrands() {
      await apiFinder.get("/brands").then((response) => {
        setBrands(response.data);
      });
    }

    async function getColors() {
      await apiFinder.get("/colors").then((response) => {
        setColors(response.data);
      });
    }

    async function getFuel() {
      await apiFinder.get("/fuel").then((response) => {
        setFuel(response.data);
      });
    }

    async function getConditions() {
      await apiFinder.get("/condition").then((response) => {
        setConditions(response.data);
      });
    }

    async function getCarTypes() {
      await apiFinder.get("/cartype").then((response) => {
        setCarType(response.data);
      });
    }

    async function getAdditional() {
      await apiFinder.get("/additional").then((response) => {
        setAdditional(response.data);
      });
    }

    async function getLocales() {
      await apiFinder.get("/locale").then((response) => {
        setLocales(response.data);
      });
    }

    async function getMileages() {
      await apiFinder.get("/mileage").then((response) => {
        setMileages(response.data);
      });
    }

    async function getTransmission() {
      await apiFinder.get("/transmission").then((response) => {
        setTransmission(response.data);
      });
    }

    getBrands();
    getColors();
    getFuel();
    getConditions();
    getCarTypes();
    getAdditional();
    getLocales();
    getMileages();
    getTransmission();
  }, []);
  let data = {
    brands,
    colors,
    fuel,
    conditions,
    carType,
    additional: additional,
    locales,
    mileages,
    transmission
  };

  if(brands.length > 0 
    && colors.length > 0 
    && fuel.length > 0 
    && carType.length > 0  
    && additional.length > 0 
    && locales.length > 0 
    && mileages.length > 0 
    && transmission.length > 0){
      return data;
    }

}
