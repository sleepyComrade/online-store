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

export { AppRoute, Filters, PromoCodes };