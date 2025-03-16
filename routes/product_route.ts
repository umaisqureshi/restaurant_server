
import express from "express";
import { getProductsController } from "../controller/productController.ts"

const router = express.Router();

router.get("/products", (req, res) => {
    res.status(200).json(getProductsController());
});

export default router;
