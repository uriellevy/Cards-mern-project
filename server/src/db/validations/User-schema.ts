import Joi from "joi";
import { IAddress, IImage, IName, IUser } from "../../interfaces/User";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,20}$/;
const phoneRegex = /^((\+972|0)([23489]|5[02468]|77)-?[1-9]\d{6})$/;

const userSchema = Joi.object<IUser>({
    isBusiness: Joi.boolean().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(phoneRegex).required(),
    password: Joi.string().pattern(passwordRegex).required(),
    address: Joi.object<IAddress>({
        city: Joi.string().min(2).max(50).required(),
        country: Joi.string().min(2).max(50).required(),
        houseNumber: Joi.number(),
        street: Joi.string().min(2).max(50).required(),
        zip: Joi.string().min(2).max(10).required(),
        state: Joi.string().min(2).max(50),
    }).required(),
    name: Joi.object<IName>({
        first: Joi.string().min(2).max(50).required(),
        middle: Joi.string().min(0).allow(""),
        last: Joi.string().min(2).max(50).required(),
    }).required(),
    image: Joi.object<IImage>({
        url: Joi.string().uri().required(),
        alt: Joi.string().min(2).max(50).required(),
    }),
});

export default userSchema;

