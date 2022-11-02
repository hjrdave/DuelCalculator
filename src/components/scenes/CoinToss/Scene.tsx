import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CoinTossBtns from '../../common/CoinTossBtns';
import CoinIcon from '../../common/CoinIcon';
import styles from './scene.module.scss';
import { transform } from 'typescript';
import { FALSE } from 'node-sass';

function Scene() {

    const [tossCoin, setTossCoin] = React.useState(false);
    const [rotateCoin, setRotateCoin] = React.useState(false);
    const [coinFace, setCoinFace] = React.useState<'heads' | 'tails'>('heads');
    const onCoinToss = () => {
        const randomNum = Math.random();
        const result = (randomNum > .5) ? 'heads' : 'tails';
        // const coinFlip = setInterval(() => {
        //     const nextFace = (coinFace === 'heads') ? 'tails' : 'heads'
        //     setCoinFace((nextFace));
        // }, 50);
        setTossCoin(true);
        setRotateCoin(true);
        setTimeout(() => {
            //clearInterval(coinFlip);
            setCoinFace(result);
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
                                <CoinIcon type={coinFace} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pt-4'>
                            <div className='mt-4'>
                                <Button disabled={(tossCoin || rotateCoin) ? true : false} className={`me-2 px-4 ${styles.coinTossBtns}`} onClick={() => onCoinToss()}>Toss</Button>
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