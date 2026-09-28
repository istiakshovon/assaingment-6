import AddButton from '@/app/components/cardDetails/AddButton';
import Saved from '@/app/components/cardDetails/Saved';
import { ICard, IcardDetails } from '@/app/types/cards.type';
import Image from 'next/image';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoBagAddOutline } from 'react-icons/io5';




export const getCard = async () => {
    const response = await fetch("http://localhost:3000/detaildata.json")
    const data = await response.json()
    return data
}

const CardsDetails = async ({ params }: IcardDetails) => {
    const { id } = await params
    const detaildata = await getCard()
    const card = detaildata.find((card: ICard) => String(card.id) === String(id))
    return (
        <div className='conteinar mx-auto mt-3'>
            <div className="card lg:card-side bg-[#0F1115] shadow-sm">
                <figure>
                    <Image src={card.image}
                        alt='name'
                        width={200}
                        height={200} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">{card.name}</h2>
                    <p className='text-[#9CA3AF]'>{card.description}</p>
                    <div className='flex gap-2 p-4 '>
                        {card.muscleGroups.map((muscle, ind) => (
                            <span
                                key={ind}
                                className='bg-[#C2F800] px-4 py-1 rounded-full text-black '
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                    <div className=' rounded-2xl bg-[#1E2330]   p-5'>
                        <span className='flex justify-between'><h2 className='text-[#9CA3AF]'>EQUIPMENT</h2><h2>{card.equipment}</h2></span>
                          <div className="divider"></div>

                        <span className='flex justify-between'><h2 className='text-[#9CA3AF]'>DIFFICULTY</h2><h2>{card.difficulty}</h2></span>                          <div className="divider"></div>

                        <span className='flex justify-between'><h2 className='text-[#9CA3AF]'>SETS</h2><h2>{card.sets}</h2></span>                          <div className="divider"></div>

                        <span className='flex justify-between'><h2 className='text-[#9CA3AF]'>REPS</h2><h2>{card.reps}</h2></span>                          <div className="divider"></div>

                        <span className='flex justify-between'><h2 className='text-[#9CA3AF]'>DURATION</h2><h2>{card.duration}</h2></span>                          <div className="divider"></div>

                        <span className='flex justify-between'><h2 className='text-[#9CA3AF]'>CALORIES</h2><h2>{card.calories}</h2></span>                          <div className="divider"></div>

                        <span className='flex justify-between'><h2 className='text-[#9CA3AF]'>RATING</h2><h2>{card.rating}</h2></span>
                    </div>
                    <h2 className='font-bold mt-5'>INSTRUCTIONS</h2>
                    <ol className='list-decimal mx-4 text-[#D1D5DB]'>
                        {card.instructions.map((instruction: string) => (
                            <li key={instruction}>{instruction}</li>
                        ))}
                    </ol>

                    <div className="mt-5">
                    <AddButton card={card}/>
                        <Saved card={card}></Saved>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsDetails;