import http from "http";
import { getProducts } from "./productController.ts";

const PORT = 8000;

const server = http.createServer((req, res) => {
    if (req.url === "/products" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(getProducts()));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});