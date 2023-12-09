import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

import "./productPageStyles.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = async (productName) => {
    try {
      await axios.delete(`/product/${encodeURIComponent(productName)}`);
      setProducts((products) =>
        products.filter((product) => product.name !== productName)
      );

      console.log(`Deleted from products : ${productName}`);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const addProduct = async (product, priceMapString) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `/product/${product.name}/${product.myPrice}/${product.amount}`,
        priceMapString,
        config
      );

      setProducts((products) => [...products, response.data]);
      console.log(`Fetched from server ${response.data.length} products`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("/product");
      setProducts(response.data);
      console.log(`Fetched from server ${response.data.length} products`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <h2
        style={{
          display: "flex",
          fontSize: "40px",
          justifyContent: "center", //wysrodkowuje w pionie
          color: "white",
        }}
      >
        Product
      </h2>
      <div style={{}} className="gridContainer">
        <div style={{ backgroundColor: "green" }} className="productsPanel">
          <ProductList products={products} deleteProduct={deleteProduct} />
        </div>
        <div style={{ backgroundColor: "blue" }} className="addProductPanel">
          <AddProduct add={addProduct} />
        </div>
        <div style={{ backgroundColor: "yellow" }} className="a2">
          A3
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
