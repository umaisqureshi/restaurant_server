import { ProductModel } from "../model/product_model.ts";


const getProductsController = async (req, res, next) => {
    await ProductModel.find().then((products) => {
        console.log(products);
        res.status(200).json(products);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
}

const createProductController = async (req, res, next) => {
    console.log(req.body);
    const { name, description, price, imageUrl, rating, type, isTopRated, isFavorite } = req.body;
    await ProductModel.create({ name, description, price, imageUrl, rating, type, isTopRated, isFavorite }).then((product) => {
        res.status(200).json(product);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
}
const markAsFavoriteProductsController = async (req, res, next) => {
    const { id } = req.params;
    const { isFavorite } = req.body;
    await ProductModel.findByIdAndUpdate(id, { isFavorite }).then((product) => {
        res.status(200).json(product);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
}

const getFavoriteProductsController = async (req, res, next) => {
    await ProductModel.find({ isFavorite: true }).then((products) => {
        res.status(200).json(products);
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    });
}


// Exporting controllers
const productControllers = {
    getProductsController,
    markAsFavoriteProductsController,
    getFavoriteProductsController,
    createProductController
}

//Exports
export { productControllers };


