import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbDashboard } from "react-icons/tb";

import {
  Wrapper,
  ImageCar,
  InfoPrimary,
  InfoSecondary,
  CardBottom,
  Tag,
} from "./styles";

const CarCardCatalog = () => {
  return (
    <Wrapper>
      <ImageCar
        src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="carros"
      />

      <CardBottom>
        <div className="ano">
          <span>1995</span>
          <div className="containercheckboxtipo">
            <input
              type="checkbox"
              id="compare"
              value="compareid"
              name="compare"
            />
            <label className="checkbox">Compare</label>
          </div>
        </div>
        <InfoPrimary>
          <p> modelo </p>
          <span>priece </span>
          <div>
            {" "}
            <HiOutlineLocationMarker /> Chicago
          </div>
        </InfoPrimary>
        <InfoSecondary>
          <div>
            <TbDashboard />
            <div>247k mi</div>
          </div>
          <div>
            <HiOutlineLocationMarker />
            <div>247k mi</div>
          </div>
          <div>
            <HiOutlineLocationMarker />
            <div>247k mi</div>
          </div>
        </InfoSecondary>
      </CardBottom>
      <Tag>
        <div>usado</div>
      </Tag>
    </Wrapper>
  );
};

export default CarCardCatalog;
