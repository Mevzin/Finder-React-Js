import React from "react";

import { Check } from "./styles";

const Checkbox = ({ value, ...rest }) => {
  return (
    <Check
      {...rest}
    >
      {value.map((value, index) => {
        return (
          <div key={index}>
            <input type="checkbox" value={value.id} />
            <span>{value.value}</span>
          </div>
        );
      })}
    </Check>
  );
};

export default Checkbox;