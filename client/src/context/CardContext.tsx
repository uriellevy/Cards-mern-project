import * as React from 'react';
import { AuthContextType, CardContextType, ICard, ICardInput } from '../interfaces/interfaces';
import { AuthContext } from './AuthContext';
import useToastNotification from '../hooks/useToastNotification';
// import { AuthContext } from './AuthContext';

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
            console.log(user)
            localStorage.setItem("user", JSON.stringify(data));
            return true;
        }
    }

    const createCard = async (newCard: ICardInput) => {
        if (!user) return;
        const res = await fetch("http://localhost:4005/api/cards", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${user.token}`,
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
            showToastSuccess(`${user} create a new card successfully`);
            localStorage.setItem("user", JSON.stringify(data));
            return true;
        }
    }

    // const deleteAllTodos = async () => {
    //     if(!user) return;

    //     try {
    //         const res = await fetch("http://localhost:4005/api/todos", {
    //             method: "DELETE",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "Authorization": `Bearer ${user.token}`,
    //             },
    //         });
    //         const data = await res.json();
    //         setTodos(data.data.todos);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const deleteTodoById = async (id:string) => {
    //     if(!user) return;

    //     try {
    //         const res = await fetch(`http://localhost:4005/api/todos/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "Authorization": `Bearer ${user.token}`,
    //             },
    //         });
    //         const data = await res.json();
    //         setTodos(data.data.todos);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const editTodoById = async (todo:ITodo) => {
    //     if(!user) return;
    //     try {
    //         const res = await fetch(`http://localhost:4005/api/todos/${todo._id}`, {
    //             method: "PUT",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "Authorization": `Bearer ${user.token}`,
    //             },
    //             body: JSON.stringify(todo),
    //         });
    //         const data = await res.json();
    //         setTodos(data.data.todos);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const value = { cards, getAllCards, getMyCards, createCard,error };

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    );
}

export default CardProvider;