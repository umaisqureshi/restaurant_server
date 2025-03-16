import { ProductModel } from "../core/interfaces/product_interface";
import { products } from "../data/products.ts";

function getProductsController(): ProductModel[] {
    return products
}

export { getProductsController };


