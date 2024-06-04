import { IAddress, IImage } from "./User";

export interface ICardInput {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: IImage;
    address: IAddress
};
export interface ICard extends ICardInput {
    _id: string,
    bizNumber: number,
    createdAt: Date,
    likes: string[],
    userId: string
};