'use client'
import { ICard } from '@/app/types/cards.type';
import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoBagAddOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';



const Saved = ({card}: {card: ICard}) => {

    const {list,setList} = useContext(CardContext)

 
    const handleSaveCards = () =>{
 const alreadyAdded = list.some(
            (item: ICard) => item.id === card.id
        );

        if (alreadyAdded) {
            toast.warning("Already added");
            return;
        }


setList([...list,card]);

toast.success(` Saved for later`)

console.log("read");
    };
 return (
             <button className="btn  btn-outline border-[#9CA3AF] rounded-2xl p-6 mx-5" onClick={() => handleSaveCards()}><CiBookmark />
                            Save for later</button>
    );}

   

export default Saved;