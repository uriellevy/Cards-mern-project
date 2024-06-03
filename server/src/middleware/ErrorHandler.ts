import { ErrorRequestHandler } from "express";
import {MongoServerError} from "mongodb";
import {ValidationError} from 'joi';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof MongoServerError) {
        return res.status(400).json({
            message: "duplicate key - must be unique",
            value: err.keyValue,
        });
    }
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: "Invalid JSON" });
    }
    if (err instanceof ValidationError) {
        return res.status(400).json({ message: err.message });
    }
    //internal server error
    return res.status(500).json(err);
};

export default errorHandler;