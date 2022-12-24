import { useState } from "react"
import { IPromoCode } from "../../interfaces";
import { PromoCodes } from "../../const";
import CartPromoBlockList from "./cart-promo-block-list";

export default function CartPromoBlock() {
  {/*состояние, когда введен какой-либо код или нет*/}
  const [promo, setPromo] = useState(false); 

  {/*состояние, когда введен конкретный код или нет*/}
  const [promoItem, setPromoItem] = useState<IPromoCode>({
    title: '',
    code: '',
    discount: 0
  });

   {/*состояние для вывода списка всех примененных кодов*/}
  const [appliedPromoItems, setAppliedPromoItems] = useState<Array<IPromoCode>>([]);

  return (
    <section className="cart__promo-block promo-block">
      <div className="promo-block__header">
        <h2 className="promo-block__title">Summary</h2>
      </div>
      <div className="promo-block__calculation">
        <p className="promo-block__products-count">Products: <span>10</span></p>

        {appliedPromoItems.length !== 0 &&
          <p className="promo-block__total-price">Total:
            <span>$10</span>
          </p>
        }
        <p className="promo-block__total-price-with-promo-code">Total: <span>$10</span></p>

        {/* выводим список примененных кодов */}
        {appliedPromoItems.length !== 0 &&
          <div className="promo-block__applied-codes">
            <h3>Applied codes</h3>
            <CartPromoBlockList appliedPromoItems={appliedPromoItems} onAppliedPromoItems={setAppliedPromoItems} />
          </div>
        }

        <div className="promo-block__code">
          <input className="promo-block__code-input"
            type="text"
            name="promo-block-code-input"
            placeholder="Enter promo code"
            onChange={(e) => {
              PromoCodes.forEach(item => {
                if (e.target.value === item.code) {
                  setPromo(true);
                  setPromoItem(item);
                }
              })
            }} />

          {promo === true &&
            <div className="promo-block__found-code">
              <p>{promoItem.title} - {promoItem.discount}%</p>
              {/* если данный код уже находится в массиве примененных кодов, кнопка Add скрывается */}
              <button className={`${appliedPromoItems.includes(promoItem) ? "non-display" : "btn promo-block__button promo-block__button--add"} `}
                onClick={() => {
                  setAppliedPromoItems([...appliedPromoItems, promoItem])
                }}>Add</button>
            </div>
          }

        <p className="promo-block__promo-test">Promo for test: "rs", "epm", "blackfriday"</p>
      </div>
      <button className="btn promo-block__button promo-block__button--buy">Buy now</button>
    </div>
    </section >
  )
}