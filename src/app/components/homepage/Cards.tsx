import { ICard } from '@/app/types/cards.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";

const getCards = async (): Promise<ICard[]> => {
    const filePath = path.join(process.cwd(), 'public', 'cardsData.json');
    const file = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(file);
};

const Cards = async () => {
    const cardsData = await getCards();

    return (
        <section className='container mx-auto p-10'>
            <h2 className='font-bold text-2xl'>THE LIBRARY</h2>
            <h2 className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</h2>

            <div className='grid grid-cols-3 gap-6 mt-5'>
                {cardsData.map((card) => (
                    <div key={card.id}>
                        <Link href={`/cards/${card.id}`}>
                            <div className="card bg-base-100 justify-between shadow-sm">
                                <figure>
                                    <Image
                                        src={card.image}
                                        alt={card.name}
                                        width={200}
                                        height={100}
                                    />
                                </figure>

                                <div className='flex gap-2 p-4'>
                                    {card.muscleGroups.map((muscle, ind) => (
                                        <span
                                            key={ind}
                                            className='bg-[#C2F800] px-4 py-1 rounded-full text-black'
                                        >
                                            {muscle}
                                        </span>
                                    ))}
                                </div>

                                <div className="card-body">
                                    <h2 className="card-title -mt-6">{card.name}</h2>
                                    <h2>{card.equipment}</h2>
                                    <div className='flex gap-3 mt-4'>
                                        <div className='flex gap-2'><FaRegClock className='mt-1' /><h2>{card.duration}</h2></div>
                                        <div className='flex gap-2'><FaFire className='mt-1' /><h2>{card.caloriesBurned}</h2></div>
                                        <div className='flex gap-2'><FaRegStar className='mt-1' /><h2>{card.rating}</h2></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;