import { useState } from "react"
import { IPromoCode } from "../../interfaces";
import { PromoCodes } from "../../const";
import CartPromoBlockList from "./cart-promo-block-list";

export default function CartPromoBlock() {
  const [promo, setPromo] = useState(false);
  const [promoItems, setPromoItems] = useState<Array<IPromoCode>>([]);

  return (
    <section className="cart__promo-block promo-block">
      <div className="promo-block__header">
        <h2 className="promo-block__title">Summary</h2>
      </div>
      <div className="promo-block__calculation">
        <p className="promo-block__products-count">Products: <span>10</span></p>
        {/* {promo === true && <p className="promo-block__total-price">Total: <span>$10</span></p> } */}
        <p className="promo-block__total-price-with-promo-code">Total: <span>$10</span></p>
        <div className="promo-block__applied-codes">
          {/* {promo === true && <h3>Applied codes</h3> } */}
          <input className="promo-block__code-input"
            type="text"
            name="promo-block-code-input"
            placeholder="Enter promo code"
            onChange={(e) => {
              PromoCodes.forEach(item => {
                if (e.target.value === item.code) {
                  setPromo(true);
                  setPromoItems([...promoItems, item]);
                }
              })
            }} />

          {promo === true &&
            <CartPromoBlockList promoItems={promoItems}/>
          }

          <p>Promo for test: "rs", "epm", "blackfriday"</p>
        </div>
        <button className="btn promo-block__button promo-block__button--buy">Buy now</button>
      </div>
    </section>
  )
}