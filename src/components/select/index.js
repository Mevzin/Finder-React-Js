import React from "react";

import { Selection } from "./styles";

const Select = ({ value }) => {
  return (
    <Selection>
      {value.map((value, index) => {
        return <option key={index}>{value.value}</option>;
      })}
    </Selection>
  );
};

export default Select;
