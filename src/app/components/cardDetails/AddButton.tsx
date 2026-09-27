'use client'
import { ICard } from '@/app/types/cards.type';
import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';
import { IoBagAddOutline } from 'react-icons/io5';



const AddButton = ({card}: {card: ICard}) => {

    const {readCards,setReadCards} = useContext(CardContext)

    const handleAddCards = () =>{

setReadCards([...readCards,card]);

console.log("read");
    };
 return (
               <button className="btn btn-active bg-[#CCFF00] text-black rounded-2xl p-6" onClick={() => handleAddCards()}><IoBagAddOutline />
                            Add to today's plan</button>
    );}

   

export default AddButton;