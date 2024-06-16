import { ICard } from "../../../interfaces/interfaces"
import MyCardsListItem from "./MyCardsListItem"
interface MyCardsListProps {
    cards:ICard[]
    deleteCard: (id: string) => Promise<boolean | undefined>
}

const MyCardsList = ({cards,deleteCard}:MyCardsListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
            {cards.map((card) => (
                <MyCardsListItem key={card._id} card={card} deleteCard={deleteCard}/>
            ))}
        </div>
  )
}

export default MyCardsList