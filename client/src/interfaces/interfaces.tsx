//cards
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
    createdAt: Date,
    likes: string[],
    userId: string
}




export interface CardContextType {
    cards: ICard[]
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
    handleSignup: (auth: IAuth) => Promise<boolean | undefined>
    handleLogout: () => Promise<void>
};

export interface ErrorMessage {
    message: string
}

export interface IUser {
    email: string
    token: string
}