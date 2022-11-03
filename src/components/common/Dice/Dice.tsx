import React from 'react';

interface Props {
    className?: string;
    classNameContainer?: string;
    type: 1 | 2 | 3 | 4 | 5 | 6;
}
export default function Dice({ className, classNameContainer, type }: Props) {

    const diceSide = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six'
    }

    return (
        <>
            <div className={`d-flex justify-content-center ${classNameContainer}`}>
                <i className={`fa-solid fa-dice-${diceSide[type]} ${className}`}></i>
            </div>
        </>
    )
}

