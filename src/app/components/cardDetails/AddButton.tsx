'use client'
import { ICard } from '@/app/types/cards.type';
import { CardContext } from '@/context/CardContext';
import React, { useContext, useState } from 'react';
import { IoBagAddOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';



const AddButton = ({ card }: { card: ICard }) => {

     const { readCards, setReadCards } = useContext(CardContext) as {
        readCards: ICard[];
        setReadCards: React.Dispatch<React.SetStateAction<ICard[]>>;
    };
    const handleAddCards = () => {
        const alreadyAdded = readCards.some(
            (item: ICard) => item.id === card.id
        );

        if (alreadyAdded) {
            toast.warning("Already added");
            return;
        }
        setReadCards([...readCards, card]);


        toast.success(`Added to plans for today`)

    };
    return (
        <div><button className="btn btn-active bg-[#CCFF00] text-black rounded-2xl p-6" onClick={() => handleAddCards()}><IoBagAddOutline />
            Add to plans for today</button>
        </div>
    );
}



export default AddButton;