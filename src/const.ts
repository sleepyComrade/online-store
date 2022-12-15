enum AppRoute {
  Main = '/',
  Basket = '/basket',
  Product = '/product/:id'
}

const Filters = {
  Category: 'Category',
  Brand: 'Brand',
  Price: 'Price',
  Stock: 'Stock'
}

export { AppRoute, Filters };