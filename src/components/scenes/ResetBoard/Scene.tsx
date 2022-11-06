import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Content from '../../common/Content';
import useDuelBoard from '../../hooks/use-duelboard';
import ConfirmBtns from '../../common/ConfirmBtns';
import styles from './scene.module.scss';

export default function Scene() {

    const board = useDuelBoard();

    return (
        <>
            <Content className={` d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={8}>
                        <div>
                            <h3 className={'text-center'}>Do you want to Reset Duelboard?</h3>
                        </div>
                        <ConfirmBtns confirmLabel='Yes' onConfirm={() => { board.resetLifePoints(); board.goToHome() }} />
                    </Col>
                </Row>
            </Content>
        </>
    )
}