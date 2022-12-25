import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
import NotFoundPage from "./pages/404-page";
import { AppRoute } from "./const";
import { useEffect, useState } from "react";
import { AppContext } from "./components/app-context/app-context";
import { IProductData, IPromoCode } from "./interfaces";
import { Header } from "./components/header/header";

export function App() {
  const [cartItems, setCartItems] = useState<Array<{ data: IProductData, counter: number }>>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(res => res.json())
      .then((data: { products: Array<IProductData> }) => setCartItems(data.products.map(item => {
        return {
          counter: 1,
          data: item
        }
      })))
  }, []);

  {/*состояние, когда введен конкретный код или нет*/ }
  const [promoItem, setPromoItem] = useState<null | IPromoCode>(null);

  {/*состояние для вывода списка всех примененных кодов*/ }
  const [appliedPromoItems, setAppliedPromoItems] = useState<Array<IPromoCode>>([]);

  const cartItemsCount = cartItems.reduce((acc, item) => acc + (1 * item.counter), 0);
  const totalCost = cartItems.reduce((acc, item) => acc + (item.data.price * item.counter), 0);
  // сумма полученных скидок
  const discountAmount = appliedPromoItems.reduce((acc, item) => acc + item.discount, 0);
   // скидка от общей стоимости товаров
  const discountFromCost = totalCost / 100 * discountAmount;
  // итоговая стоимость с учетом скидки
  const totalCostWithDiscount = totalCost - discountFromCost;

  return (
    // <AppContext.Provider value={}>
      <HashRouter>
        <Header cartItemsCount={cartItemsCount} totalCost={totalCost} totalCostWithDiscount={totalCostWithDiscount} />
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
              <CartPage cartItems={cartItems}
                setCartItems={setCartItems}
                cartItemsCount={cartItemsCount}
                totalCost={totalCost}
                promoItem={promoItem}
                setPromoItem={setPromoItem}
                appliedPromoItems={appliedPromoItems}
                setAppliedPromoItems={setAppliedPromoItems}
                totalCostWithDiscount={totalCostWithDiscount} />
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
    // </AppContext.Provider>
  );
}
