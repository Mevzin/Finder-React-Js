import React, { useEffect, useState } from "react";

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
import { apiFinder } from "../../service/api";

export default function HorizontalFilter() {
  const theme = useTheme();
  const [brands, setBrands] = useState();
  const [typeCar, setTypeCar] = useState();

  async function getBrands() {
    await apiFinder.get("/brands")
      .then((response) => {
        setBrands(response.data);
      })
  }

  async function getTypeCar(){
    await apiFinder.get("/cartype")
      .then((response) => {
        setTypeCar(response.data);
      })
  }

  useEffect(() => {
    getBrands(),
    getTypeCar()
  },[])

  return (
    <FilterContainer>
      <SelectionFilterButtons>
        <ButtonNewCars>Novo</ButtonNewCars>
        <ButtonUsedCars>Usado</ButtonUsedCars>
      </SelectionFilterButtons>
      <FormFilter>
        <InputContent>
          <AiOutlineSearch color={theme.colors.gray700} />
          <input type="text" placeholder="Pesquise por ..." />
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <RiStarLine color={theme.colors.gray700} />
          <select name="cars" id="cars">
            <option value="null">Marca</option>
            {brands?.map((model) => (
                <option key={model.id} value={model.name}>
                  {model.name}
                </option>
              )
            )}
          </select>
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <HiOutlineMenuAlt4 color={theme.colors.gray700} />
          <select name="cars" id="cars">
            <option value="volvo">Modelo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <TbCar color={theme.colors.gray700} />
          <select name="cars" id="cars">
            <option value="volvo">Tipo</option>
            {typeCar?.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.value}
                </option>
            ))}
          </select>
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <RiMapPinLine color={theme.colors.gray700} />
          <select name="cars" id="cars">
            <option value="volvo">Local</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </InputContent>
        <ButtonSearch>Pesquisar</ButtonSearch>
      </FormFilter>
    </FilterContainer>
  );
}
