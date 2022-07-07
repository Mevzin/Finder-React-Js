import React from "react";

import { Selection } from "./styles";

const Select = ({placeholder, value, disabled, ...rest }) => {
  return (
    <Selection
      disabled={disabled}
      {...rest}
    >
      <option value="">{placeholder}</option>
      {value.map((value, index) => {
        return <option key={index} value={value.id}>{value.value||value.model}</option>;
      })}
    </Selection>
  );
};

export default Select;
