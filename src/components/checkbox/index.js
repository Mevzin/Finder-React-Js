import React from "react";

import { Check } from "./styles";

const Checkbox = ({ value }) => {
  return (
    <Check>
      {value.map((value, index) => {
        return (
          <div key={index}>
            <input type="checkbox" value={value.value} />
            <span>{value.value}</span>
          </div>
        );
      })}
    </Check>
  );
};

export default Checkbox;
