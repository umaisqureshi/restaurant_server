
import express from "express";
import { getProductsController, markAsFavoriteController, getFavoriteProductsController } from "../controller/productController.ts"

const router = express.Router();

router.get("/products", (req, res, next) => {
    res.status(200).json(getProductsController());
});

router.put("/products/favorite/:id", (req, res, next) => {
    const product = markAsFavoriteController(parseInt(req.params.id));
    if (product === undefined) {
        const error = new Error("Product not found");
        error.cause = 404;
        return next(error);
    }
    res.status(200).json(product);
});

router.get("/products/favorite", (req, res, next) => {
    const products = getFavoriteProductsController();
    if (products === undefined) {
        const error = new Error("Product not found");
        error.cause = 404;
        return next(error);
    }
    res.status(200).json(products);
});

export default router;
