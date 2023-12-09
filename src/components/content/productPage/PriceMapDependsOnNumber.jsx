import React, { useState } from "react";
import MultiplicableInput from "./MultiplicableInput";
import { useContext } from "react";
import { AddProductContext } from "./AddProdcutContext";


const PriceMapDependsOnNumber = (number) => {
  const [inputValues, setInputValues] = useState([]);
  const { handleSetPriceMap } = useContext(AddProductContext);

  const handleInputChange = (index, values) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = values;
    setInputValues(newInputValues);
    handleSetPriceMap(newInputValues.slice(1))
  };

  const inputsArray = Array.from({ length: number.number }, (_, index) => index + 1);
  const inputs = [];

  inputsArray.forEach((num) =>
    inputs.push(
      <MultiplicableInput
        key={num}
        onInputChange={(values) => handleInputChange(num, values)}
      />
    )
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {inputs}
    </div>
  );
};

export default PriceMapDependsOnNumber;
