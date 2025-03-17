interface ProductModel {
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    rating: number,
    type: ProductType,
    isTopRated: boolean,
    isFavorite: boolean,
}


class ProductData implements ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    type: ProductType;
    isTopRated: boolean;
    isFavorite: boolean;
    constructor(product: ProductModel) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.imageUrl = product.imageUrl;
        this.rating = product.rating;
        this.type = product.type;
        this.isTopRated = product.isTopRated;
        this.isFavorite = product.isFavorite;
    }
}

type ProductType = "pizza" | "burger" | "pasta" | "dessert" | "drink";

export { ProductData, ProductType, ProductModel };
