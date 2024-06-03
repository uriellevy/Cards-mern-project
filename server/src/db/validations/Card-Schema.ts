import Joi from "joi";
import { ICardInput } from "../../interfaces/Cards";
import { phoneRegex } from "./Patterns";
import addressSchema from "../schemas/Adress-schema";
import imageSchema from "../schemas/Image-schema";

const cardSchema = Joi.object<ICardInput>({
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    email: Joi.string().email().min(5).max(30).required(),
    phone: Joi.string().pattern(phoneRegex).min(9).max(11).required(),
    web: Joi.string().uri().min(14).max(100),
    address: addressSchema,
    image: imageSchema,
});

export default cardSchema;