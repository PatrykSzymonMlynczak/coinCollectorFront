import React, { useState } from "react";


const ProductList = ({ products, deleteProduct }) => {
  const handleDeleteProduct = (name) => {
    return deleteProduct(name);
  };

  const [visiblePrice, setVisiblePrice] = useState(1);
  const productList = products.map((product) => {
    if (product.name !== "PAY_DEBT") {
      const pricesArray = Object.entries(product.quantityPriceMap).map(
        ([quantity, price]) => ({
          quantity: parseFloat(quantity),
          price: price,
        })
      );

      const priceMapListed = pricesArray.map((item, index) => (
        <li key={index}>
          Sztuk: {item.quantity}, Cena: {item.price}
        </li>
      ));
      return (
        <div
          style={{ background: "yellow", padding: "5px 10px" }}
          key={product.name}
        >
          <label style={productNameStyles}>{product.name}</label>
          <button onClick={() => handleDeleteProduct(product.name)}>X</button>
          {visiblePrice ? null : <p>Cena : {product.myPrice}</p>}
          <p>Ilość : {product.totalSortAmount}</p>
          <div>
            <ul style={ulPriceMapStyles}>Cennik: {priceMapListed}</ul>
          </div>
          <br></br>
        </div>
      );
    } else {
      return null;
    }
  });
  return (
    <div>
      <ul style={ulProductStyles}>{productList}</ul>
    </div>
  );
};

const productNameStyles = {
  fontSize: "22px",
  fontWeight: "bold",
  paddingRight: "10px",
};

const ulPriceMapStyles = { display: "block", padding: "3px 20px" };

const ulProductStyles = {
  padding: "3px 20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "10px",
};

export default ProductList;
