import React from 'react';
import styles from './calcScore.module.scss';

interface Props {
    total: number;
    operatorType: 'minus' | 'add';
    input?: number | string;
};

export default function CalcSum({ total, operatorType, input }: Props) {

    return (
        <>
            <div className={`${styles.compContainer} ps-3 pe-3 d-flex justify-content-start align-items-center`}>
                <p className={'mb-0'}>{total}</p>
                <p className={`ps-3 pe-3 mb-0 ${styles.operator}`}>
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