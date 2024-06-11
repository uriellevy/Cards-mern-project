//global:
export interface IName {
    first: string
    middle?: string
    last: string
}
export interface IAddress {
    street: string
    city: string
    state?: string
    zip?: string
    country: string
    houseNumber: number
}
export interface IImage {
    alt: string
    url: string
}

//card:


export interface ICardInput {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: IImage;
    address: IAddress
}

export interface ICard extends ICardInput {
    _id: string,
    bizNumber: number,
    likes: string[],
    userId: string
}

export interface CardContextType {
    cards: ICard[]
    error:string
    getAllCards: () => Promise<void>
    getMyCards: () => Promise<boolean | undefined>
    createCard: (newCard: ICardInput) => Promise<void>
}

///user

export interface IAuth {
    email: string,
    password: string
}
export type AuthContextType = {
    error: string
    user: IUser | null
    handleLogin: (auth: IAuth) => Promise<boolean | undefined>
    handleSignup: (auth: IUserInput) => Promise<boolean | undefined>
    handleLogout: () => Promise<void>
}

export interface ErrorMessage {
    message: string
}

export interface IUser {
    email: string
    token: string
    user: IUserInput
}

export interface IUserInput{
    email: string
    phone: string
    password: string
    isBusiness: boolean
    isAdmin: boolean
    address: IAddress
    name: IName
    image?: IImage
}