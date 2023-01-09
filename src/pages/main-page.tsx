import FiltersSection from "./../components/filters/filters-section";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IProductItem } from "./../interfaces";
import { CardsBlock } from "../components/cards/cards-block";

type MainPageProps = {
  productsItems: Array<IProductItem>;
  onAddCartItem: (productItem: IProductItem) => void;
  onRemoveCartItem: (productItem: IProductItem) => void;
}

export default function MainPage({productsItems, onAddCartItem, onRemoveCartItem}: MainPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryCat = searchParams.getAll('cat') || [];
  const queryBrand = searchParams.getAll('brand') || [];
  const queryMinPrice = searchParams.get('minPrice') || '0';
  const queryMaxPrice = searchParams.get('maxPrice') || '2000';
  const queryMinStock = searchParams.get('minStock') || '0';
  const queryMaxStock = searchParams.get('maxStock') || '200';
  const querySearch = searchParams.get('search') || '';
  const querySort = searchParams.get('sort') || '';
  const queryStyle = searchParams.get('style') || 'grid';

  const qCat = JSON.stringify(queryCat);
  const qBrand = JSON.stringify(queryBrand);

  const [activeCategories, setActiveCategories] = useState<Array<string>>(queryCat);
  const [brands, setBrands] = useState<Array<string>>([]);
  const [activeBrands, setActiveBrands] = useState<Array<string>>(queryBrand);
  const [brandState, setBrandState] = useState<Array<boolean>>([]);
  const [categories, setCategories] = useState<Array<string>>([]);
  const [categoryState, setCategoryState] = useState<Array<boolean>>([]);
  const [minPriceValue, setMinValue] = useState(queryMinPrice);
  const [maxPriceValue, setMaxValue] = useState(queryMaxPrice);
  const [minStockValue, setMinStockValue] = useState(queryMinStock);
  const [maxStockValue, setMaxStockValue] = useState(queryMaxStock);
  const [searched, setSearched] = useState(querySearch);
  const [sort, setSort] = useState(searchParams.get('sort') || '');
  const [style, setStyle] = useState(searchParams.get('style') || 'grid');
    
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
    for (const product of productsItems) {
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
    setStyle(queryStyle);
  }, [productsItems, qCat, qBrand, queryMinPrice, queryMaxPrice, queryMinStock, queryMaxStock, querySearch, querySort, queryStyle])

  const activeItems = filterItems(productsItems, queryCat, queryBrand, queryMinPrice, queryMaxPrice, queryMinStock, queryMaxStock, querySearch, querySort);

  return (
    <main className="main">
      <div className="main-container">
        <div className="main-page__content-wrap">
          <FiltersSection onPriceChange={(data: {min: string, max: string}) => {
            setSearchParams({brand: activeBrands,
                            cat: activeCategories,
                            minPrice: data.min,
                            maxPrice: data.max,
                            minStock: minStockValue,
                            maxStock: maxStockValue,
                            search: searched,
                            sort: sort,
                            style: style});            
            }} onStockChange={(data: {min: string, max: string}) => {
            setSearchParams({brand: activeBrands,
                            cat: activeCategories,
                            minPrice: minPriceValue,
                            maxPrice: maxPriceValue,
                            minStock: data.min,
                            maxStock: data.max,
                            search: searched,
                            sort: sort,
                            style: style});
            }} onBrandChange={(data: string[]) => {
            setSearchParams({brand: data,
                            cat: activeCategories,
                            minPrice: minPriceValue,
                            maxPrice: maxPriceValue,
                            minStock: minStockValue,
                            maxStock: maxStockValue,
                            search: searched,
                            sort: sort,
                            style: style});
            }} onCategoryChange={(data: string[]) => {
            setSearchParams({brand: activeBrands,
                            cat: data,
                            minPrice: minPriceValue,
                            maxPrice: maxPriceValue,
                            minStock: minStockValue,
                            maxStock: maxStockValue,
                            search: searched,
                            sort: sort,
                            style: style});
            }} activeItems={activeItems.map(item => item.data)}
            productsItems={productsItems.map(item => item.data)}
            onReset={() => {
              setSearchParams({sort: sort});
            }}
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
            setSearchParams({brand: activeBrands,
              cat: activeCategories,
              minPrice: minPriceValue,
              maxPrice: maxPriceValue,
              minStock: minStockValue,
              maxStock: maxStockValue,
              search: value,
              sort: sort,
              style: style});
          }} onSortChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSearchParams({brand: activeBrands,
              cat: activeCategories,
              minPrice: minPriceValue,
              maxPrice: maxPriceValue,
              minStock: minStockValue,
              maxStock: maxStockValue,
              search: searched,
              sort: e.target.value,
              style: style});
          }} onStyleChange={(view: string) => {
            setSearchParams({brand: activeBrands,
              cat: activeCategories,
              minPrice: minPriceValue,
              maxPrice: maxPriceValue,
              minStock: minStockValue,
              maxStock: maxStockValue,
              search: searched,
              sort: sort,
              style: view});
          }} products={activeItems} total={activeItems.length}
          search={searched}
          sort={sort}
          style={style}
          onAddCartItem={(productItem) => {onAddCartItem(productItem)}}
          onRemoveCartItem={(productItem) => {onRemoveCartItem(productItem)}} />
        </div>
      </div>
    </main>
  );
}