import React, { useEffect, useState } from "react";

import { useTheme } from "styled-components";

import { Link } from "react-router-dom";

import {
  FilterContainer,
  SelectionFilterButtons,
  FormFilter,
  ButtonSearch,
  InputContent,
} from "./styles";

import { RiStarLine, RiMapPinLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { TbCar } from "react-icons/tb";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import DividerImg from "@assets/divider.png";

import { useFinder } from "../../context/finder";

import { apiFinder } from "@services/api";

import TypeButton from "../typeButton";
import { motion } from "framer-motion";

export default function HorizontalFilter() {
  const theme = useTheme();
  const { finderProps } = useFinder();
  const [cars, setCars] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [conditionType, setConditionType] = useState("novo");
  const [filterData, setFilterData] = useState({});
  const [urlParams, setUrlParams] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [locationSelect, setLocationSelect] = useState("");
  const [modelSelect, setModelSelect] = useState("");
  const [brandSelect, setBrandSelect] = useState("");
  const [carTypeSelect, setCarTypeSelect] = useState("");

  async function getCarByType(brandIdSelected) {
    if (brandIdSelected !== "") {
      await apiFinder
        .get(`/adverts/?brand=${brandIdSelected}`)
        .then((response) => {
          setCars(response.data);
          setIsDisabled(false);
        });

      setBrandSelect("brand=" + brandIdSelected + "&");
    } else {
      setBrandSelect("");
    }
  }

  useEffect(() => {
    setUrlParams(
      searchInput + brandSelect + modelSelect + carTypeSelect + locationSelect
    );
    urlParams === "" && setUrlParams("all");
  }, [searchInput, locationSelect, modelSelect, brandSelect, carTypeSelect]);

  return (
    <motion.div
      style={{ zIndex: 2 }}
      initial={{
        x: window.innerWidth,
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4}}
      exit={{
        x: window.innerWidth,
        opacity: 0,
      }}
    >
      <FilterContainer>
        <SelectionFilterButtons>
          <TypeButton
            title={"Novo"}
            isActive={conditionType === "novo"}
            onClick={() => setConditionType("novo")}
          />
          <TypeButton
            title={"Usado"}
            isActive={conditionType === "usado"}
            onClick={() => setConditionType("usado")}
          />
        </SelectionFilterButtons>
        <FormFilter>
          <InputContent>
            <AiOutlineSearch color={theme.colors.gray700} />
            <input
              type="text"
              placeholder="Pesquise por ..."
              onChange={(e) =>
                setSearchInput(
                  (e.target.value === "") | " "
                    ? ""
                    : "search=" + encodeURI(e.target.value) + "&"
                )
              }
            />
          </InputContent>
          <img src={DividerImg} />
          <InputContent>
            <RiStarLine color={theme.colors.gray700} />
            <select
              onChange={(e) =>
                getCarByType(e.target.value === "" ? "" : e.target.value)
              }
            >
              <option value="">Marca</option>
              {finderProps !== {} &&
                finderProps?.brands.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.value}
                  </option>
                ))}
            </select>
          </InputContent>
          <img src={DividerImg} />
          <InputContent>
            <HiOutlineMenuAlt4 color={theme.colors.gray700} />
            <select
              disabled={isDisabled}
              onChange={(e) =>
                setModelSelect(
                  e.target.value === "" ? "" : "model=" + e.target.value + "&"
                )
              }
            >
              <option value="">Modelo</option>
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
              onChange={(e) =>
                setCarTypeSelect(
                  e.target.value === "" ? "" : "carType=" + e.target.value + "&"
                )
              }
            >
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
              onChange={(e) =>
                setLocationSelect(
                  e.target.value === "" ? "" : "location=" + e.target.value
                )
              }
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
          <ButtonSearch>
            <Link to={`/catalogo/${conditionType}/${urlParams}`}>
              Pesquisar
            </Link>
          </ButtonSearch>
        </FormFilter>
      </FilterContainer>
    </motion.div>
  );
}
