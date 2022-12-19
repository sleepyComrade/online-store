import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import CartPage from "./pages/cart-page";
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
          path={AppRoute.Cart}
          element={
            <CartPage />
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
