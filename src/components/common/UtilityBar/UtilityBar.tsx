import React from 'react';
import { Row, Col } from 'react-bootstrap';
import useDuelBoard from '../../hooks/use-duelboard';
import styles from './utilityBar.module.scss';

export default function UtilityBar() {

    const board = useDuelBoard();

    return (
        <>
            <Row className={`${styles.utilityBar} utility-bar d-flex justify-content-center`}>
                <Col xs='5' className='d-flex justify-content-between'>
                    <p className="mb-0 cursor" onClick={board.goToCoinToss}><i className="far fa-copyright"></i></p>
                    <p className="mb-0 cursor" onClick={board.goToDiceRoll}><i className="fas fa-dice-five"></i></p>
                    <p className="mb-0 cursor" onClick={board.goToBoardReset}><i className="fas fa-redo"></i></p>
                </Col>
            </Row>
        </>
    )
}