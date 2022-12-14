import React from "react";
import { BrowserRouter, Route, Routes } from "../node_modules/react-router-dom/dist/index";
import MainPage from './pages/main-page';
import BasketPage from './pages/basket-page';
import ProductPage from './pages/product-page';
import NotFoundPage from './pages/404-page';
import { AppRoute } from './const';

export function App() {
  return (
    // <h1></h1>
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
