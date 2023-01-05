import React from "react";
import { Link, useParams } from "react-router-dom";
import { Modal } from "../components/payment-form/modal";
import { PaymentForm } from "../components/payment-form/payment-form";
import { ICardStyle, IProductItem } from "../interfaces";
import NotFoundPage from "./404-page";
import ImagesGallery from "../components/images-gallery/images-gallery";

type ProductPageProps = {
  products: Array<IProductItem>;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductPage({ products, isModal, setIsModal }: ProductPageProps) {
  const params = useParams();
  const product = products.find((product) => product.data.id === Number(params.id));
 
  if (!product) {
    return <NotFoundPage />;
  }
  console.log(product);
  const { title, category, brand, description, discountPercentage, rating, stock, price, images } = product.data;
  
  const btnContent = product.counter > 0 ? 'Remove from cart' : 'Add to cart';
  const btnColor = product.counter > 0 ? 'crimson' : '#48647f';

  return (
    <main>
      <div className="main-container main-container--product-page">
        <div className="product__breadcrumbs">
          <ul className="product__breadcrumbs-list">
            <li className="product__breadcrumbs-item"><span>Store</span>&gt;&gt;</li>
            <li className="product__breadcrumbs-item"><span>{category}</span>&gt;&gt;</li>
            <li className="product__breadcrumbs-item"><span>{brand}</span>&gt;&gt;</li>
            <li className="product__breadcrumbs-item"><span>{title}</span></li>
          </ul>
        </div>
        <section className="product">
          <div className="product__header">
            <h2 className="product__title">{title}</h2></div>
          <div className="product__info">
            <div className="product__images">
              <ImagesGallery images={images}  />
            </div>
            <div className="product__full-info">
              <ul className="product__full-info-list">
                <li className="product__full-info-item"><p>Rating: <span>{rating}</span></p></li>
                <li className="product__full-info-item"><p>Category: <span>{category}</span></p></li>
                <li className="product__full-info-item"><p>Brand: <span>{brand}</span></p></li>
                <li className="product__full-info-item"><p>Description: <span>{description}</span></p></li>
                <li className="product__full-info-item"><p>Discount Percentage: <span>{discountPercentage}</span></p></li>
                <li className="product__full-info-item"><p>Stock: <span>{stock}</span></p></li>
              </ul>
            </div>
            <div className="prodict__buy-block">
              <p className="product__price">${new Intl.NumberFormat("en").format(price)}</p>
              <button className="btn product__button product__button--add" style={{ background: `${btnColor}` }}>
              </button>
              <button className="btn promo-block__button promo-block__button--buy" onClick={() => setIsModal(true)}>Buy now</button>
            </div>
          </div>
        </section>
        <Modal open={isModal} setState={setIsModal}>
          <PaymentForm setState={setIsModal} />
        </Modal>
      </div>
    </main>
  );
}