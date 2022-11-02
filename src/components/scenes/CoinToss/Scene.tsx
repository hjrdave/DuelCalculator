import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CoinIcon from '../../common/CoinIcon';
import styles from './scene.module.scss';

function Scene() {

    const [tossCoin, setTossCoin] = React.useState(false);
    const [rotateCoin, setRotateCoin] = React.useState(false);
    const [coinFace, setCoinFace] = React.useState<'heads' | 'tails'>('heads');
    const flipCoin = (time: number) => {
        const faces: ('heads' | 'tails')[] = ['heads', 'tails'];
        setTimeout(() => { setCoinFace(faces[0]) }, time);
        setTimeout(() => { setCoinFace(faces[1]) }, time * 2);
        setTimeout(() => { setCoinFace(faces[0]) }, time * 3);
        setTimeout(() => { setCoinFace(faces[1]) }, time * 4);
        setTimeout(() => { setCoinFace(faces[0]) }, time * 5);
    }
    const onCoinToss = () => {
        const randomNum = Math.random();
        const result = (randomNum > .5) ? 'heads' : 'tails';
        setTossCoin(true);
        setRotateCoin(true);
        flipCoin(100);
        setTimeout(() => {
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