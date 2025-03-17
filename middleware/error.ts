import { Request, Response, NextFunction } from "express";

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction
) => {
    if (err.cause) {
        res.status(err.cause).json({ message: err.message });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default errorMiddleware;
