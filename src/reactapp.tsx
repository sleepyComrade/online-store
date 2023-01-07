import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
import NotFoundPage from "./pages/404-page";
import { AppRoute } from "./const";
import { IProductData, IProductItem, IPromoCode } from "./interfaces";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

interface IStorageItem {
  id: number;
  counter: number;
}

class StorageItem {
  id: number;
  counter: number;
  constructor(data: IStorageItem) {
    if(!(data !== null && typeof data === 'object')) throw new Error();
    if(typeof data.id !== 'number') throw new Error();
    this.id = data.id;

    if(typeof data.counter !== 'number') throw new Error();
    this.counter = data.counter;
  }
}

export function App() {
  const [productsItems, setProductsItems] = useState<Array<IProductItem>>([]);
  const localStorageKey = 'a';

  useEffect(() => {    
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then((data: { products: Array<IProductData> }) => {
        const loadedItems = localStorage.getItem(localStorageKey);
        const parsedItems: Array<IStorageItem> = loadedItems /*&& Array.isArray(loadedItems)*/ ? JSON.parse(loadedItems) : []; 
        const validated: Array<StorageItem> = parsedItems.map(it => {
          try {
            const item = new StorageItem(it);
            return item;
          }
          catch(e) {
            return null;
          }
        }).filter(it => it !== null) as Array<StorageItem>;
        setProductsItems(data.products.map(item => {
        return {
          counter: validated.find(it => it.id === item.id) ?. counter || 0,
          data: item
        }
      }))
    })
  }, []);

  const cartItems = productsItems.filter(item => item.counter > 0);
  const [isModal, setIsModal] = useState(false);  // добавить также в ProductPage

  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.setItem(localStorageKey, JSON.stringify(cartItems.map(it => ({id: it.data.id, counter: it.counter}))));
    }
  }, [cartItems]);

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
    <HashRouter>
      <Header cartItemsCount={cartItemsCount}
        totalCost={totalCost}
        totalCostWithDiscount={totalCostWithDiscount} />
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage productsItems={productsItems}
              onAddCartItem={(productItem: IProductItem) => {
                setProductsItems((last) => {
                  const currentIndex = last.findIndex((item) => item.data.id == productItem.data.id);
                  return [...last.slice(0, currentIndex), { ...last[currentIndex], counter: productItem.counter + 1 }, ...last.slice(currentIndex + 1)]
                })
              }}
              onRemoveCartItem={(productItem: IProductItem) => {
                setProductsItems((last) => {
                  const currentIndex = last.findIndex((item) => item.data.id == productItem.data.id);
                  return [...last.slice(0, currentIndex), { ...last[currentIndex], counter: 0 }, ...last.slice(currentIndex + 1)]
                })
              }}
            />
          }
        />
        <Route
          path={AppRoute.Cart}
          element={
            <CartPage cartItems={cartItems}
              setCartItems={setProductsItems}
              cartItemsCount={cartItemsCount}
              totalCost={totalCost}
              promoItem={promoItem}
              setPromoItem={setPromoItem}
              appliedPromoItems={appliedPromoItems}
              setAppliedPromoItems={setAppliedPromoItems}
              totalCostWithDiscount={totalCostWithDiscount}
              isModal={isModal}
              setIsModal={setIsModal} />
          }
        />
        <Route
          path={AppRoute.Product}
          element={
            <ProductPage products={productsItems}
              isModal={isModal}
              setIsModal={setIsModal} />
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
