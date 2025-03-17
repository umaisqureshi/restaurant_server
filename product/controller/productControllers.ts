import { products } from "../db/product_db.ts";
import { ProductModel } from "../model/product_model.ts";


//Controllers

const getProductsController = (req, res, next) => {
    const product = getProducts();
    res.status(200).json(product);
}

const markAsFavoriteProductsController = (req, res, next) => {
    const product = markAsFavorite(parseInt(req.params.id));
    if (product === undefined) {
        const error = new Error("Product not found");
        error.cause = 404;
        return next(error);
    }
    res.status(200).json(product);
}

const getFavoriteProductsController = (req, res, next) => {
    const products = getFavoriteProducts();
    if (products === undefined) {
        const error = new Error("Product not found");
        error.cause = 404;
        return next(error);
    }
    res.status(200).json(products);
}



//Methods
function getProducts(): ProductModel[] {
    return products
}

function markAsFavorite(id: number): ProductModel | undefined {
    const product = products.find((product) => product.id === id);
    if (!product) return undefined;
    product.isFavorite = true;
    return product;
}

function getFavoriteProducts(): ProductModel[] | undefined {
    const favoriteProducts: ProductModel[] = products.filter((product) => product.isFavorite);
    if (favoriteProducts.length === 0) {
        return undefined;
    }
    return favoriteProducts;
}

// Exporting controllers
const productControllers = {
    getProductsController,
    markAsFavoriteProductsController,
    getFavoriteProductsController
}

//Exports
export { productControllers };


