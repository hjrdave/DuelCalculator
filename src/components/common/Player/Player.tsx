import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import styles from './player.module.scss';

interface Props {
    number: number;
    name: string;
}
export default function Player({ number, name }: Props) {

    return (
        <>
            <div className={`${styles.player} ${styles.playerCardSmall} glow m-4`}>
                <div className={`${styles.playerName} pt-3 d-flex justify-content-between`}>
                    <p className='ps-4'><Link to={'/lp-calculator/add'}><i className="fas fa-plus"></i></Link></p>
                    <p>{name}</p>
                    <p className='pe-4'><Link to={'/lp-calculator/minus'}><i className="fas fa-minus"></i></Link></p>
                </div>
                <div className={`${styles.playerCard} d-flex justify-content-center`}>
                    <p>
                        <CountUp
                            start={8000}
                            end={8000}
                            delay={0}
                            duration={.75}
                            useEasing={true}
                        />
                    </p>
                </div>
            </div>
        </>
    )
}