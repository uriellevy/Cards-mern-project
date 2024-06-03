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
export interface IUser {
    email: string
    phone: string
    password: string
    createdAt: Date
    isBusiness: boolean
    isAdmin: boolean
    address: IAddress
    name: IName
    image?: IImage
};