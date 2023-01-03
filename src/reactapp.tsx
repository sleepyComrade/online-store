import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
import NotFoundPage from "./pages/404-page";
import { AppRoute } from "./const";
import { useEffect, useState } from "react";
import { AppContext } from "./components/app-context/app-context";
import { IProductData, IProductItem, IPromoCode } from "./interfaces";
import { Header } from "./components/header/header";

export function App() {
  const [productsItems, setProductsItems] = useState<Array<IProductItem>>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then((data: { products: Array<IProductData> }) => setProductsItems(data.products.map(item => {
        return {
          counter: 0,
          data: item
        }
      })))
  }, []);

  const cartItems = productsItems.filter(item => item.counter > 0);
  const [isModal, setIsModal] = useState(false);  // добавить также в ProductPage

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
                setIsModal={setIsModal}/>
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
