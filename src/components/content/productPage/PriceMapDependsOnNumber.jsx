import React, {useState} from "react";
import MultiplicableInput from "./MultiplicableInput";  


const PriceMapDependsOnNumber = (number) => {
    const [inputValues, setInputValues] = useState([]);
  
    const handleInputChange = (index, values) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = values;
      setInputValues(newInputValues);
      console.log(JSON.stringify(inputValues.slice()));
    };
  
    const labels = Array.from({ length: number.number }, (_, index) => index + 1);
    const inputs = [];
  
    labels.forEach((num) => 
    inputs.push(
      <MultiplicableInput key={num} onInputChange={(values) => handleInputChange(num, values)} />
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