import React from 'react';
import Content from '../../common/Content';
import { Row, Col } from 'react-bootstrap';

export default function Scene() {

    return (
        <>
            <Content className={`d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center'>
                    <Col xs={10} className={'pt-4'}>
                        <p>Player Name</p>
                    </Col>
                </Row>
            </Content>
        </>
    )
}