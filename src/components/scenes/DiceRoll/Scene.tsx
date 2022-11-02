import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dice from '../../common/Dice';
import styles from './scene.module.scss';

function Scene() {

    const [tossCoin, setTossCoin] = React.useState(false);
    const [rotateCoin, setRotateCoin] = React.useState(false);
    const [diceSide, setDiceSide] = React.useState<(1 | 2 | 3 | 4 | 5 | 6)>(1);
    const rollDice = (time: number) => {
        setTimeout(() => { setDiceSide(1) }, time);
        setTimeout(() => { setDiceSide(2) }, time * 2);
        setTimeout(() => { setDiceSide(3) }, time * 3);
        setTimeout(() => { setDiceSide(4) }, time * 4);
        setTimeout(() => { setDiceSide(5) }, time * 5);
    }
    const onDiceRoll = () => {
        const randomNum = Math.random();
        const result = (randomNum > .5) ? 'heads' : 'tails';
        setTossCoin(true);
        setRotateCoin(true);
        rollDice(100);
        setTimeout(() => {
            //setCoinFace(result);
        }, 500);
        setTimeout(() => {
            setTossCoin(false);
            setRotateCoin(false);
        }, 1000);
    };

    return (
        <>
            <Container fluid className={`${styles.coinToss} d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center'>
                    <Col xs={8}>
                        <div className={`${(tossCoin) ? styles.translateCoin : ''}`}>
                            <div className={`${(rotateCoin) ? styles.rotateCoin : ''}`}>
                                <Dice type={diceSide} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pt-4'>
                            <div className='mt-4'>
                                <Button disabled={(tossCoin || rotateCoin) ? true : false} className={`me-2 px-4 ${styles.coinTossBtns}`} onClick={() => onDiceRoll()}>Roll</Button>
                                <Link to={'/'}><Button className={`ms-2 px-4  ${styles.coinTossBtns}`}>Close</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Scene;