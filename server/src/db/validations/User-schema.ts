import Joi from "joi";
import { IAddress, IImage, IName, IUser } from "../../interfaces/User";
import { passwordRegex, phoneRegex } from "./Patterns";

const userSchema = Joi.object<IUser>({
    isBusiness: Joi.boolean().required(),
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be valid',
        'any.required': 'Email is required'
    }),
    phone: Joi.string().pattern(phoneRegex).required().messages({
        'string.pattern.base': 'Phone must be valid',
        'any.required': 'Phone is required'
    }),
    password: Joi.string().pattern(passwordRegex).required().messages({
        'string.pattern.base': 'Password must be valid',
        'any.required': 'Password is required'
    }),
    address: Joi.object<IAddress>({
        city: Joi.string().min(2).max(50).required().messages({
            'string.min': 'City name must be at least 2 characters long',
            'string.max': 'City name must be at most 50 characters long',
            'any.required': 'City name is required'
        }),
        country: Joi.string().min(2).max(50).required().messages({
            'string.min': 'Country name must be at least 2 characters long',
            'string.max': 'Country name must be at most 50 characters long',
            'any.required': 'Country name is required'
        }),
        houseNumber: Joi.number(),
        street: Joi.string().min(2).max(50).required().messages({
            'string.min': 'Street name must be at least 2 characters long',
            'string.max': 'Street name must be at most 50 characters long',
            'any.required': 'Street name is required'
        }),
        zip: Joi.string().min(2).max(10).required().messages({
            'string.min': 'Zip number must be at least 2 characters long',
            'string.max': 'Zip number must be at most 50 characters long',
            'any.required': 'Zip number is required'
        }),
        state: Joi.string().min(2).max(50),
    }).required(),
    name: Joi.object<IName>({
        first: Joi.string().min(2).max(50).required().messages({
            'string.min': 'First name must be at least 2 characters long',
            'string.max': 'First name must be at most 50 characters long',
            'any.required': 'First name is required'
        }),
        middle: Joi.string().min(0).allow(""),
        last: Joi.string().min(2).max(50).required().messages({
            'string.min': 'Last name must be at least 2 characters long',
            'string.max': 'Last name must be at most 50 characters long',
            'any.required': 'Last name is required'
        }),
    }).required(),
    image: Joi.object<IImage>({
        url: Joi.string().uri().required().messages({
            'string.uri': 'url must be valid',
            'any.required': 'url name is required'
        }),
        alt: Joi.string().min(2).max(50).required().messages({
            'string.min': 'alt name must be at least 2 characters long',
            'string.max': 'alt name must be at most 50 characters long',
            'any.required': 'alt name is required'
        }),
    }),
});

export default userSchema;