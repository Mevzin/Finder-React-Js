import React, { useContext, useState } from "react";

import { useTheme } from "styled-components";

import {
  FilterContainer,
  SelectionFilterButtons,
  ButtonNewCars,
  ButtonUsedCars,
  FormFilter,
  ButtonSearch,
  InputContent,
} from "./styles";

import { RiStarLine, RiMapPinLine } from "react-icons/ri";

import { AiOutlineSearch } from "react-icons/ai";

import { TbCar } from "react-icons/tb";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

import DividerImg from "@assets/divider.png";
import { apiFinder } from "@services/api";
import { useFinder } from "../../context/finder";
import TypeButton from "../typeButton";

export default function HorizontalFilter() {
  const theme = useTheme();
  const { finderProps } = useFinder();
  const [cars, setCars] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [conditionType, setConditionType] = useState("");
  const [filterData, setFilterData] = useState({});

  async function getCarByType(brandIdSelected) {
    await apiFinder
      .get(`/adverts/?brand=${brandIdSelected}`)
      .then((response) => {
        setCars(response.data);
        setIsDisabled(false);
      });

      setFilterData({...filterData, model: brandIdSelected});
  }

  function handleConditionType(type) {
    setConditionType(type);
    setFilterData({ ...filterData, condition: type });
  }

  function makeUrlParams(parameters){
    for(let i = 0 ; i < parameters.length; i++){
      if(parameters[i] !== undefined || parameters[i] !== 'null'){
      }
      alert(parameters[i]+"&");
    }
  }

  return (
    <FilterContainer action={`/catalogo/${conditionType}/${makeUrlParams(filterData)}`}>
      <SelectionFilterButtons>
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
      </SelectionFilterButtons>
      <FormFilter>
        <InputContent>
          <AiOutlineSearch color={theme.colors.gray700} />
          <input
            type="text"
            placeholder="Pesquise por ..."
            onChange={(e) => setFilterData({ ...filterData, search: e.target.value })}
          />
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <RiStarLine color={theme.colors.gray700} />
          <select onChange={(e) => getCarByType(e.target.value)}>
            <option value="null">Marca</option>
            {finderProps !== {} &&
              finderProps?.brands.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
          </select>
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <HiOutlineMenuAlt4 color={theme.colors.gray700} />
          <select disabled={isDisabled}
          onChange={(e) => setFilterData({ ...filterData, carId: e.target.value })}>
            <option value="null">Modelo</option>
            {cars.length > 0 &&
              cars?.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.model}
                </option>
              ))}
          </select>
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <TbCar color={theme.colors.gray700} />
          <select 
          onChange={(e) => setFilterData({ ...filterData, carType: e.target.value })}>
            <option value="">Tipo</option>
            {finderProps.hasOwnProperty("carType") &&
              finderProps?.carType.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.value}
                </option>
              ))}
          </select>
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <RiMapPinLine color={theme.colors.gray700} />
          <select
            onChange={(e) => setFilterData({ ...filterData, locale: e.target.value })}
          >
            <option value="">Local</option>
            {finderProps.hasOwnProperty("locales") &&
              finderProps?.locales.map((locale) => (
                <option key={locale.id} value={locale.id}>
                  {locale.value}
                </option>
              ))}
          </select>
        </InputContent>
        <ButtonSearch>Pesquisar</ButtonSearch>
      </FormFilter>
    </FilterContainer>
  );
}
