import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './coinToss.module.scss';

export default function CoinTossBtns() {

    return (
        <>
            <div className='d-flex justify-content-center pt-4'>
                <div>
                    <Button className='mr-1'>Toss</Button>
                    <Button className='ml-1'>Close</Button>
                </div>
            </div>
        </>
    )
}