import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CoinTossBtns from '../../app-ui/coin-toss-btns';
import CoinIcon from '../../app-ui/coin-icon';
import styles from './scene.module.scss';

function Scene() {
    return (
        <>
            <Container fluid className={`${styles.coinToss} d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center'>
                    <Col xs={8}>
                        <CoinIcon />
                        <CoinTossBtns />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Scene;