import express from "express";
import productRoute from "./product/view/product_route.ts";
import errorMiddleware from "./middleware/error.ts";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URI: string = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`${MONGO_URI}/${process.env.DB_NAME}`).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});


app.use("/api", productRoute);
app.use(errorMiddleware);

