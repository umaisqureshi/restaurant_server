import db from "mongodb"
import dotenv from "dotenv"

dotenv.config();

const MONGO_URI: string = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/";

const dbConnection = async () => {
    try {
        const client = new db.MongoClient(MONGO_URI);
        await client.connect();
        let restaurant_db = client.db(process.env.DB_NAME);
        return restaurant_db;
    } catch (error) {
        console.log(error);
    }
}



export default dbConnection;