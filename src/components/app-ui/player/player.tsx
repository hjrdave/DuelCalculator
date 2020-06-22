import React from 'react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import './_player.scss';

export default function Player() {

    return (
        <>
            <div className='player glow m-4'>
                <div className='player-name pt-3 d-flex justify-content-between'>
                    <p className='pl-4'><Link to={'/lp-calculator'}><i className="fas fa-plus"></i></Link></p>
                    <p>Player 1</p>
                    <p className='pr-4'><Link to={'/lp-calculator'}><i className="fas fa-minus"></i></Link></p>
                </div>
                <div className='player-card d-flex justify-content-center'>
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