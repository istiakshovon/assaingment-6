"use client"
import React, { useContext } from 'react';
import { CardContext } from '@/context/CardContext';

const PlansPage = () => {
    const {readCards,list} = useContext(CardContext)
    return (
        <div>
            <h2>MY PLAN</h2>
            <h2>Cap of five lifts for today. Finish them, then load more.</h2>

        </div>
    );
};

export default PlansPage;