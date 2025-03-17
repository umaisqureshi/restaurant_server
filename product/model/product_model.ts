
import { ProductInterface, ProductType } from "../model/interfaces/product_interface.ts";

class ProductModel implements ProductInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    type: ProductType;
    isTopRated: boolean;
    isFavorite: boolean;
    constructor(product: ProductInterface) {
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

export { ProductModel };