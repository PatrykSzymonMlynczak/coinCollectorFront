import React, { createContext, useState } from "react";

export const AddProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [priceMap, setPriceMap] = useState("");

  const handleSetPriceMap = (incomingPriceObjectsList) => {
    const incomingPriceMap = incomingPriceObjectsList.reduce((acc, obj) => {
      const { quantity, price } = obj;
      acc[quantity] = parseFloat(price);
      return acc;
    }, {});

    setPriceMap(incomingPriceMap);
  };

  return (
    <AddProductContext.Provider
      value={{ priceMap, handleSetPriceMap }}
    >
      {children}
    </AddProductContext.Provider>
  );
};

export default ProductProvider;
