import { IPromoCode } from "./interfaces";

enum AppRoute {
  Main = '/',
  Cart = '/cart',
  Product = '/product/:id'
}

const Filters = {
  Category: 'Category',
  Brand: 'Brand',
  Price: 'Price',
  Stock: 'Stock'
}

const PromoCodes: Array<IPromoCode> = [
  {
    title: "Rolling Scopes School",
    code: "rs",
    discount: 10
  },
  {
    title: "Epam Systems",
    code: "epm",
    discount: 10
  },
  {
    title: "Black Friday",
    code: "blackfriday",
    discount: 15
  }
]

const gridItem = {
  item: 'card-item',
  image: 'card-item__image',
  titleWrap: 'card-item__title-rate-wrap',
  title: 'card-item__title',
  rateWrap: 'card-item__rate-wrap',
  star: 'card-item__star-icon',
  priceWrap: 'card-item__price-wrap',
  price: 'card-item__price',
  discount: 'card-item__discount',
  originPrice: 'card-item__origin-price',
  button: 'card-item__btn'
}

const bigItem = {
  item: 'big-card-item',
  image: 'big-card-item__image',
  titleWrap: 'big-card-item__title-rate-wrap',
  title: 'big-card-item__title',
  rateWrap: 'big-card-item__rate-wrap',
  star: 'big-card-item__star-icon',
  priceWrap: 'big-card-item__price-wrap',
  price: 'big-card-item__price',
  discount: 'big-card-item__discount',
  originPrice: 'big-card-item__origin-price',
  button: 'big-card-item__btn'
}

export { AppRoute, Filters, gridItem, bigItem, PromoCodes };
