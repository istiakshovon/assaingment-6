'use client'
import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoBagAddOutline } from 'react-icons/io5';

interface ICard {
    id: number;
    name: string;
}

const Saved = ({card}: {card: ICard}) => {

    const {list,setList} = useContext(CardContext)

    const handleSaveCards = () =>{

setList([...list,card]);

console.log("read");
    };
 return (
             <button className="btn  btn-outline border-[#9CA3AF] rounded-2xl p-6 mx-5" onClick={() => handleSaveCards()}><CiBookmark />
                            Save for later</button>
    );}

   

export default Saved;