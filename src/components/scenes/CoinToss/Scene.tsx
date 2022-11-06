import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Content from '../../common/Content';
import ConfirmBtns from '../../common/ConfirmBtns';
import CoinIcon from '../../common/CoinIcon';
import useDuelBoard from '../../hooks/use-duelboard';
import styles from './scene.module.scss';

function Scene() {

    const board = useDuelBoard();

    return (
        <>
            <Content className={`d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={8}>
                        <div className={`${(board.tossCoin) ? styles.translateCoin : ''}`}>
                            <div className={`${(board.rotateCoin) ? styles.rotateCoin : ''}`}>
                                <CoinIcon type={board.coinFace} />
                            </div>
                        </div>
                        <ConfirmBtns confirmLabel='Flip' onConfirm={() => board.onCoinToss()} />
                    </Col>
                </Row>
            </Content>
        </>
    )
}

export default Scene;