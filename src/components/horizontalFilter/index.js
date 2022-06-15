import React from "react";

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

export default function HorizontalFilter() {
  const theme = useTheme();

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
            <option value="volvo">Marca</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
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
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
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
