import { ICard } from "../../../interfaces/interfaces";
import HomePageListItem from "./HomePageListItem";

interface HomePageListProps {
    cards:ICard[]
}


const HomePageList = ({cards}:HomePageListProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {cards.map((card) => (
                <HomePageListItem key={card._id} card={card}/>
            ))}
        </div>
    )
}

export default HomePageList