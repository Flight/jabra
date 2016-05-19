declare module ProductsNamespace {
    export interface ListPrice {
        _currency: string;
        __text: string;
    }

    export interface ListPriceWithQuantity {
        _currency: string;
        __text: string;
    }

    export interface SalePriceWithQuantity {
        _currency: string;
        __text: string;
    }

    export interface TotalDiscountWithQuantity {
        _currency: string;
        __text: string;
    }

    export interface SalePriceWithFeesAndQuantity {
        _currency: string;
        __text: string;
    }

    export interface FeePricing {
        salePriceWithFeesAndQuantity: SalePriceWithFeesAndQuantity;
        formattedSalePriceWithFeesAndQuantity: string;
    }

    export interface Pricing {
        listPrice: ListPrice;
        listPriceWithQuantity: ListPriceWithQuantity;
        salePriceWithQuantity: SalePriceWithQuantity;
        formattedListPrice: string;
        formattedListPriceWithQuantity: string;
        formattedSalePriceWithQuantity: string;
        totalDiscountWithQuantity: TotalDiscountWithQuantity;
        discountDescription: string;
        feePricing: FeePricing;
        listPriceIncludesTax: string;
        msrpPrice: string;
        formattedMsrpPrice: string;
    }

    export interface AddProductToCart {
        _cartUri: string;
        _relation: string;
        _uri: string;
    }

    export interface Product {
        id: string;
        displayName: string;
        externalReferenceId: string;
        thumbnailImage: string;
        pricing: Pricing;
        addProductToCart: AddProductToCart;
        _relation: string;
        _uri: string;
    }

    export interface Products {
        product: Product[];
        totalResults: string;
        totalResultPages: string;
        _relation: string;
        _uri: string;
    }

    export interface ProductsObject {
        products: Products;
    }
}
