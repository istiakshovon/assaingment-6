"use client"
import React, { createContext, ReactNode, useState } from 'react';
import { ICard } from '@/app/types/cards.type';

type CardContextType = {
  readCards: ICard[];
  setReadCards: React.Dispatch<React.SetStateAction<ICard[]>>;
  list: ICard[];
  setList: React.Dispatch<React.SetStateAction<ICard[]>>;
};

export const CardContext = createContext<CardContextType>({
  readCards: [],
  setReadCards: () => {},
  list: [],
  setList: () => {},
});

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<ICard[]>([]);
  const [readCards, setReadCards] = useState<ICard[]>([]);

  const sharedData = { list, setList, readCards, setReadCards };

  return (
    <CardContext.Provider value={sharedData}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;