import { Request, Response, NextFunction } from 'express';
import Card from "../db/models/CardModel";
import cardSchema from "../db/validations/Card-Schema";
import { ICardInput } from "../interfaces/Cards";

export interface CardsRequest extends Request {
    user: { _id: string }
}

export const getAllCards = async (req: CardsRequest, res: Response, next: NextFunction) => {
    try {
        const cards = await Card.find();
        res.status(200).json({ message: "All cards recieved successfully", cards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const getAllUserCards = async (req: CardsRequest, res: Response, next: NextFunction) => {
    try {
        const cards = await Card.find({ userId: req.user._id });
        res.status(200).json({ message: "All cards recieved successfully", cards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const createCard = async (req: CardsRequest, res: Response, next: NextFunction) => {
    const newCard = { ...req.body, userId: req.user._id } as ICardInput;
    const cardEntity = new Card(newCard);
    try {
        await cardSchema.validateAsync(req.body as ICardInput);
        const newCard = await cardEntity.save();
        const updatedUserCards = await Card.find({ userId: req.user._id });
        res.status(200).json({ message: "Card created successfully", newCard, cards: updatedUserCards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteAllUserCards = async (req: CardsRequest, res: Response) => {
    try {
        const deletedCards = await Card.deleteMany({ userId: req.user._id });
        res.status(200).json({ message: "All my cards deleted successfully", deletedCards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteCard = async (req: CardsRequest, res: Response) => {
    const { id } = req.params;
    try {
        const deletedCard = await Card.findByIdAndDelete({ _id: id });
        const updatedUserCards = await Card.find({ userId: req.user._id });
        res.status(200).json({ message: `Card with id ${id} deleted successfully`, deletedCard, updatedUserCards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const editCard = async (req: CardsRequest, res: Response) => {
    const { id } = req.params;
    try {
        const editedCard = await Card.findByIdAndUpdate({ _id: id},{...req.body, userId: req.user._id});
        const updatedUserCards = await Card.find({ userId: req.user._id });
        res.status(200).json({ message: `Card with id ${id} edited successfully`, editedCard, updatedUserCards });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const toggleCardLike = async (req: CardsRequest, res: Response) => {
    const { id } = req.params;
    const userId = req.user._id;
    try {
        const card = await Card.findById(id);
        if(!card) return res.status(404).json({ message: 'Card not found' });
        const isAlreadyLiked = card.likes.includes(userId);
        const update = isAlreadyLiked ? {$pull: {likes:userId}} : {$addToSet: {likes:userId}};
        const updatedCard = await Card.findByIdAndUpdate(id,update,{ new: true });
        const updatedUserCards = await Card.find({ userId: req.user._id });
        return res.status(200).json({ message: `Card with id ${id} like toggles successfully`, updatedCard, cards:updatedUserCards});
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

