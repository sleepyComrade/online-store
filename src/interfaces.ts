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

export interface IPersonalData {
    name: string,
    phone: string,
    address: string,
    email: string
}

export interface IPersonalDataValidity {
    nameIsCorrect: boolean,
    phoneIsCorrect: boolean,
    addressIsCorrect: boolean,
    emailIsCorrect: boolean
}

export interface ICardData {
    holder: string,
    number: string,
    date: string,
    cvv: string
}

export interface ICardDataValidity {
    holderIsCorrect: boolean,
    numberIsCorrect: boolean,
    dateIsCorrect: boolean,
    cvvIsCorrect: boolean
}
