import { ICard, IUser } from "../../../interfaces/interfaces";
import HomePageListItem from "./HomePageListItem";

interface HomePageListProps {
    cards:ICard[]
    user: IUser | null
}


const HomePageList = ({cards, user}:HomePageListProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {cards.map((card) => (
                <HomePageListItem key={card._id} card={card} user={user}/>
            ))}
        </div>
    )
}

export default HomePageList