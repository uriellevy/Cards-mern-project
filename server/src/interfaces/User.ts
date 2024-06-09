import { Document, Model, Schema } from "mongoose";

export interface IName {
    first: string
    middle?: string
    last: string
};
export interface IAddress {
    street: string
    city: string
    state?: string
    zip?: string
    country: string
    houseNumber: number
};
export interface IImage {
    alt: string
    url: string
};
export interface IUser extends Document {
    email: string
    phone: string
    password: string
    isBusiness: boolean
    isAdmin: boolean
    address: IAddress
    name: IName
    image?: IImage
};

// Define the IUserModel interface
export interface IUserModel extends Model<IUser> {
    signup(userEntity: IUser): Promise<IUser>;
    login(email: string, password: string): Promise<IUser>;
}


export type IJWTPayload = {
    _id: string,
    isAdmin: boolean,
    isBusiness: boolean
}