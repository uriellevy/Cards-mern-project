import { Card } from 'flowbite-react';
import { ICard } from '../../../interfaces/interfaces';
import { Button } from "flowbite-react";
interface MyCardsListItemProps {
  card: ICard
  deleteCard: (id: string) => Promise<boolean | undefined>
}

const MyCardsListItem = ({ card,deleteCard }: MyCardsListItemProps) => {
  return (
    <div className='max-w-sm w-[300px]'>
      <Card className="">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{card.subtitle}</p>
        <img src={card.image.url} alt={card.image.alt} className='rounded' />
        <Button>Edit</Button>
        <Button color="failure" onClick={() => deleteCard(card._id)}>delete</Button>
      </Card>
    </div>
  )
}

export default MyCardsListItem