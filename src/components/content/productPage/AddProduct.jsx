import React, { useEffect, useState } from "react";
import PriceMap from "./PriceMap";

const AddProduct = ({ add }) => {
  const [name, setName] = useState();
  const [myPrice, setMyPrice] = useState();
  const [amount, setAmount] = useState();
  const [priceMap, setPriceMap] = useState("");

  const handleAddProduct = () => {
    const product = {
      name,
      myPrice,
      amount,
    };
    return add(product, priceMap);
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

  useEffect(() => {
    setPriceMap({
      1: 100,
      5: 80,
      10: 65,
    });
  }, []);

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

      <button onClick={handleAddProduct}>Add</button>
      <PriceMap />
    </div>
  );
};

export default AddProduct;
