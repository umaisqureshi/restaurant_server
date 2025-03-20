import { ProductModel } from "../model/product_model.ts";
import dbCollectionHelper from "../db/helpers/db_collection_helper.ts";
import { ObjectId } from "mongodb";
//Controllers


const collection = await dbCollectionHelper();


const getProductsController = async (req, res, next) => {
    let products = await getProducts();
    res.status(200).json(products);
}

const markAsFavoriteProductsController = async (req, res, next) => {
    const product = await markAsFavorite(parseInt(req.params.id));
    if (product === undefined) {
        const error = new Error("Product not found");
        error.cause = 404;
        return next(error);
    }
    res.status(200).json(product);
}

const getFavoriteProductsController = async (req, res, next) => {
    const products = await getFavoriteProducts();
    if (products === undefined) {
        const error = new Error("Product not found");
        error.cause = 404;
        return next(error);
    }
    res.status(200).json(products);
}



//Methods
async function getProducts(): Promise<ProductModel[]> {
    const products =
        await collection?.find({}).toArray();
    const data = products.map((product) => {
        return ProductModel.fromJson(product);
    });
    return data;
}

async function markAsFavorite(id: number): Promise<ProductModel | undefined> {
    const product = await collection?.findOne({ _id: new ObjectId(id) });
    if (!product) return undefined;
    const data = ProductModel.fromJson(product);
    await collection?.updateOne({ _id: new ObjectId(id) }, { $set: { isFavorite: true } });
    return data;
}

async function getFavoriteProducts(): Promise<ProductModel[] | undefined> {
    const favoriteProducts = await collection?.find({ isFavorite: true }).toArray();
    if (favoriteProducts === null) {
        return undefined;
    }
    const data = favoriteProducts.map((product) => {
        return ProductModel.fromJson(product);
    });
    return data;
}

// Exporting controllers
const productControllers = {
    getProductsController,
    markAsFavoriteProductsController,
    getFavoriteProductsController
}

//Exports
export { productControllers };


