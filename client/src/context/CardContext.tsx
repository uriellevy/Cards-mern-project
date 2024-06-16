import * as React from 'react';
import { AuthContextType, CardContextType, ICard, ICardInput } from '../interfaces/interfaces';
import { AuthContext } from './AuthContext';
import useToastNotification from '../hooks/useToastNotification';

export const CardContext = React.createContext<CardContextType | null>(null);

const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cards, setCards] = React.useState<ICard[]>([]);
    const [error, setError] = React.useState("");
    const { user } = React.useContext(AuthContext) as AuthContextType;
    const { showToastSuccess, showToastError } = useToastNotification();

    const getAllCards = async () => {
        try {
            const res = await fetch("http://localhost:4005/api/cards");
            const data = await res.json();
            setCards(data.cards);
        } catch (error) {
            console.log(error);
        }
    }

    const getMyCards = async () => {
        if (!user) return;
        const res = await fetch("http://localhost:4005/api/cards/myCards", {
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.message);
            showToastError(data.message);
            return false;
        }
        if (res.ok) {
            setCards(data.cards);
            setError("");
            showToastSuccess(`${user.user.name.first} cards loaded successfully`);
            return true;
        }
    }

    const createCard = async (newCard: ICardInput) => {
        if (!user) return;
        const res = await fetch("http://localhost:4005/api/cards", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCard),
        });
        const data = await res.json();

        if (!res.ok) {
            setError(data.message);
            showToastError(data.message);
            return false;
        }
        if (res.ok) {
            setCards(data.cards);
            setError("");
            showToastSuccess(`${user.user.name.first} create a new card successfully`);
            return true;
        }
    }

    const deleteCard = async (id:string) => {
        if(!user)return;
        const res = await fetch(`http://localhost:4005/api/cards/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-Type": "application/json"
            },
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.message);
            showToastError(data.message);
            return false;
        }
        if (res.ok) {
            setCards(data.cards);
            setError("");
            showToastSuccess(`card ${id} deleted successfully`);
            return true;
        }
    }

    const value = { cards, error , getAllCards, getMyCards, createCard, deleteCard };

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    );
}

export default CardProvider;