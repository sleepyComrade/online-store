import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IProductItem } from "../interfaces";
import NotFoundPage from "./404-page";
import ImagesGallery from "../components/images-gallery/images-gallery";
import ButtonAddToCart from "../components/buttons/button-add-to-cart";

type ProductPageProps = {
  products: Array<IProductItem>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
  // cartItems: IProductItem[];
}

export default function ProductPage({ products, setIsModal, onAddCartItem, onRemoveCartItem }: ProductPageProps) {
  const params = useParams();
  const product = products.find((product) => product.data.id === Number(params.id));

  const navigate = useNavigate();

  if (!product) {
    return <NotFoundPage />;
  }
  const { title, category, brand, description, discountPercentage, rating, stock, price, images } = product.data;

  return (
    <main className="main">
      <div className="main-container main-container--product-page">
        <div className="product__breadcrumbs">
          <ul className="product__breadcrumbs-list">
            <li className="product__breadcrumbs-item">
              <span>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>Store </Link>
              </span>&gt;&gt;
            </li>
            <li className="product__breadcrumbs-item"><span>{category}</span>&gt;&gt;</li>
            <li className="product__breadcrumbs-item"><span>{brand}</span>&gt;&gt;</li>
            <li className="product__breadcrumbs-item"><span>{title}</span></li>
          </ul>
        </div>
        <section className="product">
          <div className="product__header">
            <h2 className="product__title">{title}</h2>
          </div>
          <div className="product__images">
            <ImagesGallery images={images} />
          </div>
          <div className="product__info">
            <div className="product__full-info">
              <ul className="product__full-info-list">
                <li className="product__full-info-item"><p>Rating: <span>{rating}</span></p></li>
                <li className="product__full-info-item"><p>Category: <span>{category}</span></p></li>
                <li className="product__full-info-item"><p>Brand: <span>{brand}</span></p></li>
                <li className="product__full-info-item"><p>Description: <br /> <span>{description}</span></p></li>
                <li className="product__full-info-item"><p>Discount Percentage: <span>{discountPercentage}</span></p></li>
                <li className="product__full-info-item"><p>Stock: <span>{stock}</span></p></li>
              </ul>
            </div>
            <div className="prodict__buy-block">
              <p className="product__price">${new Intl.NumberFormat("en").format(price)}</p>
              <ButtonAddToCart style={'card-item__btn'}
                product={product}
                onAddCartItem={(productItem) => { onAddCartItem(productItem) }}
                onRemoveCartItem={(productItem) => { onRemoveCartItem(productItem) }}
              />              
              <button className="btn card-item__btn" onClick={() => {
                if (product.counter === 0)  {
                  onAddCartItem(product);
                }
                  navigate('/cart');
                  setIsModal(true);                 
              }}>Buy now</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}