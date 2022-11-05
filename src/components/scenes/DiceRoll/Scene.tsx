import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Content from '../../common/Content';
import Dice from '../../common/Dice';
import styles from './scene.module.scss';

export default function Scene() {
    type TDiceSides = (1 | 2 | 3 | 4 | 5 | 6);
    const [tossDice, setTossDice] = React.useState(false);
    const [diceSide, setDiceSide] = React.useState<TDiceSides>(1);
    const rollDice = (time: number) => {
        setTimeout(() => { setDiceSide(1) }, time);
        setTimeout(() => { setDiceSide(2) }, time * 2);
        setTimeout(() => { setDiceSide(3) }, time * 3);
        setTimeout(() => { setDiceSide(4) }, time * 4);
        setTimeout(() => { setDiceSide(5) }, time * 5);
    }
    const onDiceRoll = () => {
        const result: TDiceSides = Math.floor(Math.random() * 6) + 1 as TDiceSides;
        setTossDice(true);
        rollDice(100);
        setTimeout(() => {
            setDiceSide(result)
        }, 500);
        setTimeout(() => {
            setTossDice(false);
        }, 1000);
    };

    return (
        <>
            <Content className={` d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={8}>
                        <div className={`${(tossDice) ? styles.translateDice : ''}`}>
                            <div className={`${(tossDice) ? styles.bounceDice : ''}`}>
                                <div className={`${(tossDice) ? styles.rotateDice : ''}`}>
                                    <Dice type={diceSide} />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pt-4'>
                            <div className='mt-4'>
                                <Button disabled={(tossDice) ? true : false} className={`me-2 px-4 ${styles.diceRollBtns}`} onClick={() => onDiceRoll()}>Roll</Button>
                                <Link to={'/'}><Button className={`ms-2 px-4  ${styles.diceRollBtns}`}>Close</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    )
}