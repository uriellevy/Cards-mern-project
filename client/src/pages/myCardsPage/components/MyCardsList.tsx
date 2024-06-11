import { ICard } from "../../../interfaces/interfaces"
import MyCardsListItem from "./MyCardsListItem"
interface MyCardsListProps {
    cards:ICard[]
}

const MyCardsList = ({cards}:MyCardsListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
            {cards.map((card) => (
                <MyCardsListItem key={card._id} card={card}/>
            ))}
        </div>
  )
}

export default MyCardsList