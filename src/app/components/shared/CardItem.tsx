import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";
import { ICard } from '@/app/types/cards.type';
import { MdDone } from 'react-icons/md';
import { CardContext } from '@/context/CardContext';

interface CardProps{
    card: ICard,
    type: 'Today’s Plan' | 'Saved'
}

const CardItem = ({ card,type }:CardProps) => {
    const { readCards, setReadCards,list, setList } = useContext(CardContext);

    const handleRemoveCard = (card: ICard) => {
if (type === 'Today’s Plan'){
     const restCards = readCards.filter((cards: ICard) => cards.id !== card.id);
            setReadCards(restCards);
}
       else {
            const restList = list.filter((cards: ICard) => cards.id !== card.id);
            setList(restList);
        }
    }



    return (

        <div className='flex justify-between rounded-2xl bg-[#232732] p-4'>
            <div className='flex gap-5'>     <Image src={card.image}
                alt={card.name}
                width={100}
                height={100} />
                <div>
                    <h2>{card.name}</h2>
                    <h2>{card.equipment}</h2>
                    <div className='flex gap-3 mt-4'>

                        <div className='flex gap-2'><FaRegClock className='mt-1' /><h2>{card.duration}</h2></div>
                        <div className='flex gap-2'><FaFire className='mt-1' /><h2>{card.caloriesBurned}</h2></div>
                        <div className='flex gap-2'><FaRegStar className='mt-1' /><h2>{card.rating}</h2></div>
                    </div>
                </div></div>
            <div className='mt-7'>
                <button className="btn btn-outline">View Details</button>

                <button className="btn btn-active bg-[#CCFF00] rounded-2xl text-black"><MdDone />
                    Mark as Done</button>
                <button onClick={() => handleRemoveCard(card)}>✕</button>

            </div>
        </div>

    );
};

export default CardItem;