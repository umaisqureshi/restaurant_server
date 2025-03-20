
import dbConnection from "../../../db_connection.ts";
import dotenv from "dotenv";

dotenv.config();

const dbCollectionHelper = async () => {
    try {
        let db = await dbConnection();
        let collection = db!.collection(process.env.PRODUCT_COLLECTION || "");
        return collection;
    } catch (error) {
        throw new Error("ProductsCollection not found");
    }
}
export default dbCollectionHelper;