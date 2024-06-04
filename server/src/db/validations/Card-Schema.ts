import Joi from "joi";
import { ICardInput } from "../../interfaces/Cards";
import { phoneRegex } from "./Patterns";
import { IAddress, IImage } from "../../interfaces/User";

const cardSchema = Joi.object<ICardInput>({
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    email: Joi.string().email().min(5).max(30).required(),
    phone: Joi.string().pattern(phoneRegex).min(9).max(11).required(),
    web: Joi.string().uri().min(14).max(100),
    address: Joi.object<IAddress>({
        city: Joi.string().min(2).max(50).required(),
        country: Joi.string().min(2).max(50).required(),
        houseNumber: Joi.number(),
        street: Joi.string().min(2).max(50).required(),
        zip: Joi.string().min(2).max(10).required(),
        state: Joi.string().min(2).max(50),
    }).required(),
    image: Joi.object<IImage>({
        url: Joi.string().uri().required(),
        alt: Joi.string().min(2).max(50).required(),
    }),
});

export default cardSchema;