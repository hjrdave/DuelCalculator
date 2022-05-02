import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from '../../common/Player';
import UtilityBar from '../../common/UtilityBar';
import { useAppStore } from '../../Store';
import styles from './scene.module.scss';

function Scene() {


    const [{ playerData, playerAmount }, Store] = useAppStore();

    return (
        <>
            <Container fluid className={`${styles.duelboard} d-flex flex-column justify-content-between`}>
                <Row className='d-flex justify-content-center' style={{ height: '100%' }}>
                    <Col className='d-flex flex-column justify-content-center'>
                        <Row className='d-flex justify-content-center'>
                            {
                                playerData.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <Col xs='5'>
                                                <Player name={item.name} number={item.number} />
                                            </Col>
                                        </React.Fragment>
                                    )

                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <UtilityBar />
            </Container>
        </>
    )
}

export default Scene;