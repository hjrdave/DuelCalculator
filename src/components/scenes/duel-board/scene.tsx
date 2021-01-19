import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from '../../app-ui/player';
import UtilityBar from '../../app-ui/utility-bar';
import './_scene.scss';

function Scene() {
    return (
        <>
            <Container fluid className='duelboard d-flex flex-column justify-content-between'>
                <Row className='d-flex justify-content-center' style={{ height: '100%' }}>
                    <Col className='d-flex flex-column justify-content-center'>
                        <Row className='d-flex justify-content-center'>
                            <Col xs='5'>
                                <Player />
                            </Col>
                            <Col xs='5'>
                                <Player />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <UtilityBar />
            </Container>
        </>
    )
}

export default Scene;