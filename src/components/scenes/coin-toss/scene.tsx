import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './_scene.scss';

function Scene() {
    return (
        <>
            <Container fluid className='coin-toss d-flex flex-column justify-content-center'>
                <Row className='d-flex justify-content-center'>
                    <Col xs={8}>
                        <div className='d-flex justify-content-center'>
                            <i className="far fa-copyright"></i>
                        </div>
                        <div className='d-flex justify-content-center pt-4'>
                            <div>
                                <Button className='mr-1'>Toss</Button>
                                <Button className='ml-1'>Close</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Scene;