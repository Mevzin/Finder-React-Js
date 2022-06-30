import React, { useContext, useEffect, useState } from "react";

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
import { FinderPropsContent } from "../../context/finder";

export default function HorizontalFilter() {
  const theme = useTheme();
  const {finderProps} = useContext(FinderPropsContent);

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
            {finderProps?.brands.map((model) => (
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
          </select>
        </InputContent>
        <img src={DividerImg} />
        <InputContent>
          <TbCar color={theme.colors.gray700} />
          <select name="cars" id="cars">
            <option value="">Tipo</option>
            {finderProps?.carType.map((type) => (
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
            <option value="">Local</option>
            {finderProps?.locales.map((locale) => (
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
