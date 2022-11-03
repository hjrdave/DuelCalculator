import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from '../../common/Calculator';

function Scene() {
    return (
        <>

            <Container fluid className={`d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center'>
                    <Col xs={8}>
                        <Calculator
                            inputs={[]}
                            playerName={'Foo'}
                            lifePoints={[4000]}
                            operatorType={'-'}
                            handleView={() => null}
                            playerNumber={1}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Scene;