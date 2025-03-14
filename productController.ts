import { ProductModel } from "./core/interfaces/product_interface";
import { products } from "./data/products";

function getProducts(): ProductModel[] {
    return products
}

export { getProducts };


