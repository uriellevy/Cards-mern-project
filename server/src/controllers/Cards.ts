import { Request, Response, NextFunction } from 'express';
import Card from "../db/models/CardModel";
import cardSchema from "../db/validations/Card-Schema";
import { ICardInput } from "../interfaces/Cards";

export interface CardsRequest extends Request {
    user: {_id:string}
  }

export const getAllCards = async (req: Request, res:Response, next:NextFunction) => {
    try {
        const cards = await Card.find();
        res.status(200).json({ message: "All cards recieved successfully", cards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const createCard = async (req: CardsRequest, res:Response, next:NextFunction) => {
    const newCard = {...req.body,userId: req.user._id} as ICardInput;
    const cardEntity = new Card(newCard);
    try {
        await cardSchema.validateAsync(req.body as ICardInput);
        const newCard = await cardEntity.save();
        res.status(200).json({ message: "Card created successfully", newCard });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}