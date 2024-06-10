import React, { useContext, useEffect } from 'react'
import { CardContext } from '../../context/CardContext';
import { CardContextType } from '../../interfaces/interfaces';
import HomePageList from './components/HomePageList';

export const HomePage = () => {
  const { cards, getAllCards } = useContext(CardContext) as CardContextType;
  useEffect(() => {
    getAllCards();
  },[])

  console.log(cards)
  return (
    <div className='container mx-auto p-4'>
      <HomePageList cards={cards}/>
    </div>
  )
}
