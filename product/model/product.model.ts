
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    rating: Number,
    type: String,
    isTopRated: Boolean,
    isFavorite: Boolean
}, { timestamps: true });

const ProductModel = mongoose.model("productsCollection", productSchema);


export { ProductModel };

