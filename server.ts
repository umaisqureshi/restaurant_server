import express from "express";
import productRoute from "./view/product_route.ts";
import errorMiddleware from "./middleware/error.ts";


const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRoute);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});