import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import BasketPage from "./pages/basket-page";
import ProductPage from "./pages/product-page";
import NotFoundPage from "./pages/404-page";
import { AppRoute } from "./const";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.Basket}
          element={
            <BasketPage />
          }
        />
        <Route
          path={AppRoute.Product}
          element={
            <ProductPage />
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HashRouter>
  );
}
