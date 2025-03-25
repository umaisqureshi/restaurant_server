import mongoose from "mongoose";
import { ProductModel } from "../model/product.model.ts";
import { Request, Response } from "express";

const getProductsController = async (req: Request, res: Response) => {

    await ProductModel.find().then(async (products) => {
        console.log(products);
        res.status(200).json(products);

    }).catch(async (err) => {

        res.status(500).json({ message: err.message });
    });
}

const createProductController = async (req: Request, res: Response) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { name, description, price, imageUrl, rating, type, isTopRated, isFavorite } = req.body;

    if (!name || !description || !price || !imageUrl || !type) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    await ProductModel.create({ name, description, price, imageUrl, rating, type, isTopRated, isFavorite }, { session }).then(async (product) => {
        res.status(201).json(product);
        await session.commitTransaction();
        session.endSession();
    }).catch(async (err) => {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({ message: err.message });
    });
}



const markAsFavoriteProductsController = async (req: Request, res: Response) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { id } = req.params;
    const { isFavorite } = req.body;
    await ProductModel.findByIdAndUpdate(id, { isFavorite }, { session }).then(async (product) => {
        res.status(200).json(product);
        await session.commitTransaction();
        session.endSession();
    }).catch(async (err) => {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({ message: err.message });
    });
}




const getFavoriteProductsController = async (req: Request, res: Response) => {
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


