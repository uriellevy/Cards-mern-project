import { useContext, useEffect } from 'react'
import { CardContext } from '../../context/CardContext';
import { AuthContextType, CardContextType } from '../../interfaces/interfaces';
import HomePageList from './components/HomePageList';
import { AuthContext } from '../../context/AuthContext';

export const HomePage = () => {
  const { cards, getAllCards } = useContext(CardContext) as CardContextType;
  const { user } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    getAllCards();
  },[])

  console.log(cards)
  return (
    <div className='container mx-auto p-4'>
      <HomePageList cards={cards} user={user}/>
    </div>
  )
}
