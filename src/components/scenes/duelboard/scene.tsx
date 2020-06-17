import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from '../../app-ui/player';
import './_scene.scss';

function Scene() {
    return (
        <>
            <Container fluid className='duelboard d-flex flex-column justify-content-between'>
                <Row className='d-flex justify-content-center' style={{height: '100%'}}>
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
                <Row className='utility-bar d-flex justify-content-center'>
                    <Col xs='5' className='d-flex justify-content-between'>
                        <p className="mb-0 cursor"><i className="far fa-copyright"></i></p>
                        <p className="mb-0 cursor"><i className="fas fa-dice-five"></i></p>
                        <p className="mb-0 cursor"><i className="fas fa-redo"></i></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Scene;