"use client"
import  {  useContext, useState } from 'react';
import { CardContext } from '@/context/CardContext';
import { ICard } from '../types/cards.type';
import CardItem from '../components/shared/CardItem';
import Link from 'next/link';

const sumofMinutes =  (cards : ICard[]) => {
       let total= 0;
       for (const card of cards){
        total = total + card.duration
       }
       return total;
};
const sumOfCalories =  (cards : ICard[]) => {
       let total= 0;
       for (const card of cards){
        total = total + card.caloriesBurned
       }
       return total;
};

const PlansPage = () => {

  const [type,setType] = useState<'Plan For Today' | 'Saved'>('Plan For Today')
    const {readCards,list} = useContext(CardContext);

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold'>MY PLAN</h2>
            <h4 className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</h4>

<div className='flex justify-between bg-[#232732] rounded-2xl p-5 mt-5'>
  <div><h2>Exercises</h2><span className='text-[#C2F800] text-3xl  px-2 py-1'>{type === 'Plan For Today' ? (readCards.length):(list.length) }</span></div>
  <div className="flex">
  <div className="divider divider-horizontal"></div>
</div>
  <div><h2 >Minutes</h2><span>{type === 'Plan For Today' ? sumofMinutes(readCards) : sumofMinutes(list)}</span></div>
   <div className="flex">
  <div className="divider divider-horizontal"></div>
</div>
  <div><h2>Calories</h2><span>{type === 'Plan For Today' ? sumOfCalories(readCards) : sumOfCalories(list)}</span></div>
</div>

{/* name of each tab group should be unique */}
<div className="tabs tabs-lift mt-5 ">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Plan For Today "  onChange={() => setType('Plan For Today')} defaultChecked />
  <div className="tab-content bg-[#111317] border-base-300 p-6">
{readCards.length> 0? readCards.map((card: ICard) => {
    return <CardItem key={card.id} card={card} type="Plan For Today" />
}):<div className='text-center p-10'><h2>NOTHING HERE YET</h2>
<h2>Browse the library and add a lift to get today moving.</h2>
<Link href="/"><button className="btn btn-active bg-[#C2F800] text-black">Go to workouts</button>
</Link>
</div>}

  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved"   onChange={() => setType('Saved')} />
  <div className="tab-content bg-[#111317] border-base-300 p-6">{list.length>0 ? list.map((card: ICard) => {
    return <CardItem key={card.id} card={card} type="Saved" />
}):<div className='text-center p-10'><h2>NOTHING HERE YET</h2>
<h2>Browse the library and add a lift to get today moving.</h2>
<Link href="/"><button className="btn btn-active bg-[#C2F800] text-black">Go to workouts</button>
</Link>
</div>}

</div>



 
</div>

        </div>
    );
};

export default PlansPage;