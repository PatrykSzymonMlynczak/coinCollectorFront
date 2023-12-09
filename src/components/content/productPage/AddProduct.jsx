import React, { useState, useContext } from "react";
import PriceMapButtons from "./PriceMapButtons";
import { AddProductContext } from "./AddProdcutContext";

const AddProduct = ({ add }) => {
  const [name, setName] = useState();
  const [myPrice, setMyPrice] = useState();
  const [amount, setAmount] = useState();
  const { priceMap } = useContext(AddProductContext);

  const handleAddProduct = () => {
    const product = {
      name,
      myPrice,
      amount,
    };
    let notNullPriceMap = priceMap;
    console.log(notNullPriceMap)
    if (notNullPriceMap === ''){
      notNullPriceMap = {
        "1": 50,
        "5": 40
      };
    }
    console.log(notNullPriceMap)
    return add(product, notNullPriceMap);
  };

  const handleOnChangeName = ({ target }) => {
    return setName(target.value);
  };

  const handleOnChangeMyPrice = ({ target }) => {
    return setMyPrice(target.value);
  };
  
  const handleOnChangeAmount = ({ target }) => {
    return setAmount(target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Dodaj Produkt</h2>
      <label htmlFor="productName">Nazwa : </label>
      <input
        input="productName"
        type="text"
        onChange={handleOnChangeName}
        value={name}
      />

      <label htmlFor="myPrice">Moja cena : </label>
      <input
        name="myPrice"
        type="number"
        onChange={handleOnChangeMyPrice}
        value={myPrice}
      />

      <label htmlFor="amount">Ilość : </label>
      <input
        name="amount"
        type="number"
        onChange={handleOnChangeAmount}
        value={amount}
      />

      <PriceMapButtons />
      <button onClick={handleAddProduct}>Add</button>

    </div>
  );
};

export default AddProduct;
