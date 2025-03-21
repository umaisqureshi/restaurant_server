
import express from "express";
import { productControllers } from "../controller/productControllers.js"
const router = express.Router();


router.get("/products", productControllers.getProductsController);
router.post("/products", productControllers.createProductController);


router.put("/products/favorite/:id", productControllers.markAsFavoriteProductsController);
router.get("/products/favorite", productControllers.getFavoriteProductsController);



export default router;
