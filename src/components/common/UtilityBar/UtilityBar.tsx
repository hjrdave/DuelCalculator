import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useAppStore } from '../../Store';
import styles from './utilityBar.module.scss';

export default function UtilityBar() {

    const [, Store, Util] = useAppStore();

    return (
        <>
            <Row className={`${styles.utilityBar} utility-bar d-flex justify-content-center`}>
                <Col xs='5' className='d-flex justify-content-between'>
                    <p className="mb-0 cursor"><Link to={'/coin-toss'}><i className="far fa-copyright"></i></Link></p>
                    <p className="mb-0 cursor"><Link to={'/dice-roll'}><i className="fas fa-dice-five"></i></Link></p>
                    <p className="mb-0 cursor" onClick={() => Store.reset(Util.actions.updatePlayerData)}><i className="fas fa-redo"></i></p>
                </Col>
            </Row>
        </>
    )
}