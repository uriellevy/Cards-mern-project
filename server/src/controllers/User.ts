import User from "../db/models/UserModel";
import userSchema from "../db/validations/User-schema";
import { IJWTPayload, IUser } from "../interfaces/User";
import jwt from "jsonwebtoken";

const generateJWT = (payload: IJWTPayload) => {
    const secret = process.env.JWT_SECRET;
    if(!secret) console.log("JWT_SECRET must be included in .env file");
    return jwt.sign(payload, secret, { expiresIn: "3d" });
}

const validateJWT = (token: string) => {
    const secret = process.env.JWT_SECRET;
    if(!secret) console.log("JWT_SECRET must be included in .env file");
    return jwt.verify(token, secret) as IJWTPayload;
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "All users recieved successfully", users });
    } catch (error) {

    }
}

export const handleLogin = async (req, res, next) => {
    try {

    } catch (error) {

    }
}

export const handleSignup = async (req, res, next) => {
    const userEntity = req.body as IUser;

    try {
        await userSchema.validateAsync(userEntity);
        const savedUser = await User.signup(userEntity);
        res.status(201).json({ message: "New user added", savedUser });
        // next();
    } catch (error) {
        // next(error);
        res.status(400).json({ message: error.message })
    }
}