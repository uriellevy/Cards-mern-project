import User from "../db/models/UserModel";
import userSchema from "../db/validations/User-schema";
import { IUser } from "../interfaces/User";

export const getAllUsers = async (req, res, next) => {
    try {

    } catch (error) {

    }
}

export const handleLogin = async (req, res, next) => {
    try {

    } catch (error) {

    }
}

export const handleSignup = async (req, res, next) => {
    const user = new User(req.body);
    const userEntity = req.body as IUser;

    try {
        const user = await userSchema.validateAsync(userEntity);
        const savedUser = await User.signup(userEntity);

        // const saved = await createUser(user);
        // res.status(201).json(saved);
        next();
    } catch (error) {
        next(error);
    }
}