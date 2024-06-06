import * as React from 'react';
import { CardContextType, ICard } from '../interfaces/interfaces';
// import { AuthContext } from './AuthContext';

export const CardContext = React.createContext<CardContextType | null>(null);

const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cards, setCards] = React.useState<ICard[]>([]);
    //   const {user} = React.useContext(AuthContext) as AuthContextType;


    // const getTodos = async () => {
    //     if(!user) return;
    //     try {
    //         const res = await fetch("http://localhost:4005/api/todos",{
    //             headers: {
    //                 "Authorization": `Bearer ${user.token}`,
    //             }
    //         });
    //         const data: ITodo[] = await res.json();
    //         setTodos(data);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const createTodo = async (todo: INewTodo) => {
    //     if(!todo.title || !todo.description) return;
    //     if(!user) return;

    //     try {
    //         const res = await fetch("http://localhost:4005/api/todos", {
    //             method: "POST",
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

    const value = { cards };

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    );
}

export default CardProvider;