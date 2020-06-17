import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import './_player.scss';

export default function Player() {

    return (
        <>
            <div className='player glow'>
                <Row>
                    <Col xs='12' className='player-name pt-3 d-flex justify-content-between'>
                        <p className='pl-2'><i className="fas fa-plus"></i></p>
                        <p className='pl-2'><i className="fas fa-minus"></i></p>
                    </Col>
                    <Col xs='12' className='player-card d-flex justify-content-center'>
                        <p>
                            <CountUp
                                start={8000}
                                end={8000}
                                delay={0}
                                duration={.75}
                                useEasing={true}
                            />
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    )
}