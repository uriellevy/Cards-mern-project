import User from "../db/models/UserModel";
import { Request, Response, NextFunction } from 'express';
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
        //projection of password is 0 because i dont want to return it to client
        const users = await User.find({},{password: 0});
        res.status(200).json({ message: "All users recieved successfully", users });
    } catch (error) {
        res.status(400).json({message: error.message}) 
    }
}

export const getUserById = async (req: Request, res:Response, next) => {
    const {id} = req.params;
    try {
        //projection of password is 0 because i dont want to return it to client
        const user = await User.findById(id,{password: 0});
        if(!user) return res.status(404).json({message: "User not found"});
        res.status(200).json({ message: "user found successfully", user});
    } catch (error) {
        res.status(400).json({message: error.message}) 
    }
}

export const handleLogin = async (req: Request, res:Response) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email, password);
        const token = await generateJWT({_id: user._id.toString(), isAdmin: user.isAdmin, isBusiness: user.isBusiness});
        res.status(200).json({message: "User logged in successfully", user, token});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const handleSignup = async (req: Request, res:Response) => {
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

export const deleteAllUsers = async(req: Request, res:Response) => {

    try {
        await User.deleteMany({});
        res.status(201).json({ message: "All users deleted successfully"});
        // next();
    } catch (error) {
        // next(error);
        res.status(400).json({ message: error.message })
    }
}