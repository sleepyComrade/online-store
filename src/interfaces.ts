export interface IProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ICardStyle {
    item: string,
    image: string,
    titleWrap: string,
    title: string,
    rateWrap: string,
    star: string,
    priceWrap: string,
    price: string,
    discount: string,
    originPrice: string,
    button: string
}
