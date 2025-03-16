import express from "express";
import productRoute from "./routes/product_route.ts";
const PORT =  process.env.PORT || 8000;
const app = express();


app.use("/api", productRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});