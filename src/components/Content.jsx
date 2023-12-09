import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Person from "./content/personPage/PersonPage";
import ProductPage from "./content/productPage/ProductPage";
import Money from "./content/moneyPage/MoneyPage";
import SalePage from "./content/salePage/SalePage";
import Home from "./content/homePage/HomePage";
import Header from "./Header";

const Content = () => {
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1] || "home";
  return (
    
      <div data-page={currentPage}>
        <Header />
        <Routes>
          <Route path="/person" element={<Person />} />
          <Route path="/product" element={<ProductPage />} />

          <Route index element={<Home />} />

          <Route path="/sale" element={<SalePage />} />
          <Route path="/money" element={<Money />} />
        </Routes>
      </div>
    
  );
};

export default Content;
