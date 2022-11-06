import React from 'react';
import { DuelBoard } from '../../interfaces';

const useDiceRoll = () => {


    const [tossDice, setTossDice] = React.useState(false);
    const [diceSide, setDiceSide] = React.useState<DuelBoard.DiceSides>(1);
    const rollDice = (time: number) => {
        setTimeout(() => { setDiceSide(1) }, time);
        setTimeout(() => { setDiceSide(2) }, time * 2);
        setTimeout(() => { setDiceSide(3) }, time * 3);
        setTimeout(() => { setDiceSide(4) }, time * 4);
        setTimeout(() => { setDiceSide(5) }, time * 5);
    }
    const onDiceRoll = () => {
        const result: DuelBoard.DiceSides = Math.floor(Math.random() * 6) + 1 as DuelBoard.DiceSides;
        setTossDice(true);
        rollDice(100);
        setTimeout(() => {
            setDiceSide(result)
        }, 500);
        setTimeout(() => {
            setTossDice(false);
        }, 1000);
    };


    return {
        onDiceRoll,
        tossDice,
        diceSide
    }
};

export default useDiceRoll;