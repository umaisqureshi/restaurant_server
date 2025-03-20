
import { WithId, Document } from "mongodb";
import { ProductInterface, ProductType } from "../model/interfaces/product_interface.ts";

class ProductModel implements ProductInterface {
    id: string;
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

    static fromJson(product: WithId<Document>): ProductModel {
        return new ProductModel({
            id: product._id.toString(),
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            rating: product.rating,
            type: product.type,
            isTopRated: product.isTopRated,
            isFavorite: product.isFavorite
        });
    }
}

export { ProductModel };