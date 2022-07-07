import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { apiFinder } from "@services/api";

const FinderPropsContext = createContext({});

const FinderProvider = ({ children }) => {
  const [finderProps, setFinderProps] = useState({});
  useMemo(async () => {
    await Promise.all([
      await getBrands(),
      await getColors(),
      await getFuel(),
      await getConditions(),
      await getCarTypes(),
      await getAdditional(),
      await getLocales(),
      await getMileages(),
      await getTransmission(),
      await getCars(),
      await getCarModel(),
      await getCarYears()
    ]).then((response) => {
      const data = {
        brands: response[0],
        colors: response[1],
        fuel: response[2],
        conditions: response[3],
        carType: response[4],
        additional: response[5],
        locales: response[6],
        mileages: response[7],
        transmission: response[8],
        cars: response[9],
        carModel: response[10],
        years: response[11],
        isLoading: false,
      };
      setFinderProps(data);
    });
  }, []);

  async function getCars() {
    const { data } = await apiFinder.get("/adverts");
    return data;
  }

  async function getBrands() {
    const { data } = await apiFinder.get("/brands");
    return data;
  }

  async function getColors() {
    const { data } = await apiFinder.get("/colors");
    return data;
  }

  async function getFuel() {
    const { data } = await apiFinder.get("/fuel");
    return data;
  }

  async function getConditions() {
    const { data } = await apiFinder.get("/condition");
    return data;
  }

  async function getCarTypes() {
    const { data } = await apiFinder.get("/cartype");
    return data;
  }

  async function getAdditional() {
    const { data } = await apiFinder.get("/additional");
    return data;
  }

  async function getLocales() {
    const { data } = await apiFinder.get("/locale");
    return data;
  }

  async function getMileages() {
    const { data } = await apiFinder.get("/mileage");
    return data;
  }

  async function getTransmission() {
    const { data } = await apiFinder.get("/transmission");
    return data;
  }

  async function getCarModel(){
    const { data } = await apiFinder.get("/carModel");
    return data;
  }

  async function getCarYears(){
    const { data } = await apiFinder.get("/years");
    return data;
  }

  return (
    <FinderPropsContext.Provider value={{ finderProps }}>
      {children}
    </FinderPropsContext.Provider>
  );
};

function useFinder() {
  const context = useContext(FinderPropsContext);
  return context;
}

export { FinderProvider, useFinder };
