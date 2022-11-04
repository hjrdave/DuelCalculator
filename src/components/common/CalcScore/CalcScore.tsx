import React from 'react';
import styles from './calcScore.module.scss';

interface Props {
    playerName: string;
    total: number;
    operatorType: 'minus' | 'add';
    input?: number | string;
    onSum?: (sum: number) => void;
};

export default function CalcSum({ playerName, total, operatorType, input, onSum }: Props) {

    return (
        <>
            <div className={`${styles.compContainer} pl-4 d-flex justify-content-start align-items-center`}>
                <p>{playerName} : {total}</p>
                <p className={`ps-3 pe-3 ${styles.operator}`}>
                    {
                        (operatorType === 'minus') ?
                            <i className={`fa-solid fa-minus ${styles.minus}`}></i> :
                            <i className={`fa-solid fa-plus ${styles.add}`}></i>
                    }
                </p>
                <p className={(operatorType === 'minus') ? styles.minus : styles.add}>{input}</p>
            </div>
        </>
    )
}