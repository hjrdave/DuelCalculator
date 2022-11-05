import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Content from '../../common/Content';
import styles from './scene.module.scss';

export default function Scene() {


    return (
        <>
            <Content className={` d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={8}>
                        <div>
                            <h3 className={'text-center'}>Do you want to Reset Duelboard?</h3>
                        </div>
                        <div className='d-flex justify-content-center pt-4'>
                            <div className='mt-4'>
                                <Button className={`me-2 px-4`} onClick={() => null}>Yes</Button>
                                <Link to={'/'}><Button className={`ms-2 px-4`}>Cancel</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    )
}