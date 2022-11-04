import React from 'react';
import Content from '../../common/Content';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from '../../common/Calculator';

function Scene() {

    const { operator } = useParams<{ operator: 'minus' | 'add' }>();
    const navigate = useNavigate();

    return (
        <>
            <Content className={`d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center'>
                    <Col xs={10}>
                        <Calculator
                            playerName={'FooMan'}
                            lifePoints={4000}
                            operatorType={operator}
                            onCancel={() => navigate('/')}
                            onEnter={(calcValue: number) => {
                                alert(`New value is ${calcValue}`);
                                navigate('/');
                            }}
                        />
                    </Col>
                </Row>
            </Content>
        </>
    )
}

export default Scene;