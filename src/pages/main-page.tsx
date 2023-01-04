import FiltersSection from "./../components/filters/filters-section";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IProductItem } from "./../interfaces";
import { CardsBlock } from "../components/cards/cards-block";

type MainPageProps = {
  productsItems: Array<IProductItem>;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
}

export default function MainPage({productsItems, onAddCartItem, onRemoveCartItem}: MainPageProps) {
  const [activeCategories, setActiveCategories] = useState<Array<string>>([]);
  const [brands, setBrands] = useState<Array<string>>([]);
  const [activeBrands, setActiveBrands] = useState<Array<string>>([]);
  const [brandState, setBrandState] = useState<Array<boolean>>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<Array<string>>([]);
  const [categoryState, setCategoryState] = useState<Array<boolean>>([]);
  const [minPriceValue, setMinValue] = useState('0');
  const [maxPriceValue, setMaxValue] = useState('2000');
  const [minStockValue, setMinStockValue] = useState('0');
  const [maxStockValue, setMaxStockValue] = useState('200');
  const [searched, setSearched] = useState('');
  const [sort, setSort] = useState(searchParams.get('sort') || '');

  const queryCat = searchParams.getAll('cat') || [];
  const queryBrand = searchParams.getAll('brand') || [];
  const queryMinPrice = searchParams.get('minPrice') || '0';
  const queryMaxPrice = searchParams.get('maxPrice') || '2000';
  const queryMinStock = searchParams.get('minStock') || '0';
  const queryMaxStock = searchParams.get('maxStock') || '200';
  const querySearch = searchParams.get('search') || '';
  const querySort = searchParams.get('sort') || '';

  const qCat = JSON.stringify(queryCat);
  const qBrand = JSON.stringify(queryBrand);
    
  const filterItems = (items: IProductItem[],
                      cat: string[],
                      brand: string[],
                      minPrice: string,
                      maxPrice: string,
                      minStock: string,
                      maxStock: string,
                      search: string,
                      sort: string) => {
    const sortInfo = sort.split('-');
    const filteredItems = items
    .filter(
      (product) =>
      cat.includes(product.data.category) || !cat.length
    )
    .filter(
      (product) =>
      brand.includes(product.data.brand) || !brand.length
    )
    .filter(
      (product) =>
      product.data.price >= +minPrice && product.data.price <= +maxPrice ||
      product.data.price <= +minPrice && product.data.price >= +maxPrice
    )
    .filter(
      (product) =>
      product.data.stock >= +minStock && product.data.stock <= +maxStock ||
      product.data.stock <= +minStock && product.data.stock >= +maxStock
    )
    .filter(
      (product) =>
      product.data.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.data.title.toLowerCase().includes(search.toLowerCase()) ||
      product.data.category.toLowerCase().includes(search.toLowerCase()) ||
      product.data.stock.toString().toLowerCase().includes(search.toLowerCase()) ||
      product.data.price.toString().toLowerCase().includes(search.toLowerCase()) ||
      product.data.description.toLowerCase().includes(search.toLowerCase()) ||
      product.data.rating.toString().toLowerCase().includes(search.toLowerCase()) ||
      product.data.discountPercentage.toString().toLowerCase().includes(search.toLowerCase())
    )
    let sortedItems = filteredItems;
    if (sortInfo.length > 1) {
      sortedItems = sortInfo[0] === 'low' ?
      filteredItems.sort((a, b) => {
        return sortInfo[1] === 'price' ?
        a.data.price - b.data.price :
        sortInfo[1] === 'discountPercentage' ?
        a.data.discountPercentage - b.data.discountPercentage :
        sortInfo[1] === 'rating' ?
        a.data.rating - b.data.rating : 0;
      }) :
      filteredItems.sort((a, b) => {
        return sortInfo[1] === 'price' ?
        a.data.price - b.data.price :
        sortInfo[1] === 'discountPercentage' ?
        a.data.discountPercentage - b.data.discountPercentage :
        sortInfo[1] === 'rating' ?
        a.data.rating - b.data.rating : 0;
      }).reverse();
    }
    return sortedItems;
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => {
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    setCategoryState(categories.map((cat: string) => queryCat.includes(cat)));
    setActiveCategories(categories.filter((cat: string) => queryCat.includes(cat)));
  }, [qCat, categories]);
  
  useEffect(() => {
    const brands: Array<string> = [];
    for (let product of productsItems) {
      if (!brands.includes(product.data.brand)) brands.push(product.data.brand);
    }
    setBrands(brands);
    setBrandState(brands.map((brand: string) => queryBrand.includes(brand)));
    setActiveBrands(brands.filter((brand: string) => queryBrand.includes(brand)));
    setMinValue(queryMinPrice);
    setMaxValue(queryMaxPrice);  
    setMinStockValue(queryMinStock);
    setMaxStockValue(queryMaxStock);
    setSearched(querySearch);
    setSort(querySort);
  }, [productsItems, qCat, qBrand, queryMinPrice, queryMaxPrice, queryMinStock, queryMaxStock, querySearch, querySort])

   const activeItems = filterItems(productsItems, queryCat, queryBrand, queryMinPrice, queryMaxPrice, queryMinStock, queryMaxStock, querySearch, querySort);

  return (
    <>
      <main>
        <div className="main-container">
          <div className="main-page__content-wrap">
            <FiltersSection onMinChange={(value: string) => {
              // setMinValue(value);
            }} onMaxChange={(value: string) => {
              // setMaxValue(value);
            }} onPriceChange={(data: {min: string, max: string}) => {
              setSearchParams({brand: activeBrands,
                              cat: activeCategories,
                              minPrice: data.min,
                              maxPrice: data.max,
                              minStock: minStockValue,
                              maxStock: maxStockValue,
                              search: searched,
                              sort: sort});
              // setActiveItems(filterItems(productsItems, queryCat, queryBrand, data.min, data.max));
            }} onStockChange={(data: {min: string, max: string}) => {
              setSearchParams({brand: activeBrands,
                              cat: activeCategories,
                              minPrice: minPriceValue,
                              maxPrice: maxPriceValue,
                              minStock: data.min,
                              maxStock: data.max,
                              search: searched,
                              sort: sort});
              // setActiveItems(filterItems(productsItems, queryCat, queryBrand, data.min, data.max));
            }} onStateChange={(data: boolean[]) => {
              // setCategoryState(data)
            }} onBrandStateChange={(data: boolean[]) => {
              // setBrandState(data);
            }} onBrandChange={(data: string[]) => {
              // setActiveBrands(data);
              setSearchParams({brand: data,
                              cat: activeCategories,
                              minPrice: minPriceValue,
                              maxPrice: maxPriceValue,
                              minStock: minStockValue,
                              maxStock: maxStockValue,
                              search: searched,
                              sort: sort});
              // setActiveItems(filterItems(productsItems, queryCat, data, queryMinPrice, queryMaxPrice));
            }} onCategoryChange={(data: string[]) => {
              // setActiveCategories(data);
              setSearchParams({brand: activeBrands,
                              cat: data,
                              minPrice: minPriceValue,
                              maxPrice: maxPriceValue,
                              minStock: minStockValue,
                              maxStock: maxStockValue,
                              search: searched,
                              sort: sort});
              // setActiveItems(filterItems(productsItems, data, queryBrand, queryMinPrice, queryMaxPrice));
            }} activeItems={activeItems.map(item => item.data)}
               productsItems={productsItems.map(item => item.data)}
               categoryState={categoryState}
               brandState={brandState}
               categories={categories}
               brands={brands}
               minPriceValue={minPriceValue}
               maxPriceValue={maxPriceValue}
               minStockValue={minStockValue}
               maxStockValue={maxStockValue}
               products={productsItems} />
            <CardsBlock onSearchChange={(value: string) => {
              // setSearched(value);
              setSearchParams({brand: activeBrands,
                cat: activeCategories,
                minPrice: minPriceValue,
                maxPrice: maxPriceValue,
                minStock: minStockValue,
                maxStock: maxStockValue,
                search: value,
                sort: sort});
            }} onSortChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              // setSort(e.target.value);
              setSearchParams({brand: activeBrands,
                cat: activeCategories,
                minPrice: minPriceValue,
                maxPrice: maxPriceValue,
                minStock: minStockValue,
                maxStock: maxStockValue,
                search: searched,
                sort: e.target.value});
            }} products={activeItems} total={activeItems.length}
            search={searched}
            sort={sort}
            onAddCartItem={(productItem) => {onAddCartItem(productItem)}}
            onRemoveCartItem={(productItem) => {onRemoveCartItem(productItem)}} />
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}