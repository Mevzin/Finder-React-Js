import React from "react";

import {
  FilterContainer,
  SelectionFilterButtons,
  ButtonNewCars,
  ButtonUsedCars,
  FormFilter,
  ButtonSearch,
} from "./styles";

import DividerImg from "@assets/divider.png";

export default function HorizontalFilter() {
  return (
    <FilterContainer>
      <SelectionFilterButtons>
        <ButtonNewCars>Novo</ButtonNewCars>
        <ButtonUsedCars>Usado</ButtonUsedCars>
      </SelectionFilterButtons>
      <FormFilter>
        <input type="text" placeholder="Pesquise por ..." />
        <img src={DividerImg} />
        <select name="cars" id="cars" >
          <option value="volvo">Marca</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <img src={DividerImg} />
        <select name="cars" id="cars">
          <option value="volvo">Modelo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <img src={DividerImg} />

        <select name="cars" id="cars">
          <option value="volvo">Tipo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <img src={DividerImg} />

        <select name="cars" id="cars">
          <option value="volvo">Local</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <ButtonSearch>
          Pesquisar
        </ButtonSearch>
      </FormFilter>
    </FilterContainer>
  );
}
