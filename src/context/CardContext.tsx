"use client"
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

export const CardContext = createContext();

const CardProvider = ({children}: {children: ReactNode}) => {
const [list, setList] = useState([]);
const [readCards, setReadCards] = useState()
const sharedData = {
    list,setList,readCards,setReadCards
};


    return <CardContext.Provider value= {sharedData}>{children}</CardContext.Provider>
};

export default CardProvider;