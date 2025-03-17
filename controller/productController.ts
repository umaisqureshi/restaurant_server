import { ProductModel, ProductData } from "../core/interfaces/product_interface";
import { products } from "../data/products.ts";

function getProductsController(): ProductModel[] {
    return products
}

function markAsFavoriteController(id: number): ProductData | undefined {
    const product = products.find((product) => product.id === id);
    if (!product) return undefined;
    product.isFavorite = true;
    return product;
}

function getFavoriteProductsController(): ProductData[] | undefined {
    const favoriteProducts: ProductData[] = products.filter((product) => product.isFavorite);
    if (favoriteProducts.length === 0) {
        return undefined;
    }
    return favoriteProducts;
}

export { getProductsController, markAsFavoriteController, getFavoriteProductsController };


