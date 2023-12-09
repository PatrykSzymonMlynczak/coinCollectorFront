import React, {useState} from "react";
import PriceMapDependsOnNumber from "./PriceMapDependsOnNumber";

const PriceMap = () => {
    const [number, setNumber] = useState(2);
  
    const handleSendNumber = (number) => {
      setNumber(number);
    };
  
    return (
      <div>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button
              onClick={() => handleSendNumber(1)}
              type="button"
              className="btn btn-secondary"
              style={{ backgroundColor: "grey" }}
            >
              1
            </button>
            <button
              onClick={() => handleSendNumber(2)}
              type="button"
              className="btn btn-secondary"
            >
              2
            </button>
            <button
              onClick={() => handleSendNumber(3)}
              type="button"
              className="btn btn-secondary"
              style={{ backgroundColor: "grey" }}
            >
              3
            </button>
            <button
              onClick={() => handleSendNumber(4)}
              type="button"
              className="btn btn-secondary"
            >
              4
            </button>
          </div>
        </div>
        <PriceMapDependsOnNumber number={number} />
      </div>
    );
  };
  
  export default PriceMap;