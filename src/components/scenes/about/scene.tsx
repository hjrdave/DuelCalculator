import React from 'react';
import Content from '../../common/Content';
import { Row, Col } from 'react-bootstrap';

export default function Scene() {
    return (
        <>
            <Content className={` d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={8}>
                        <h1>DuelCalculator.js</h1>
                        <p><em>Created by David A. Sanders</em></p>
                        <p>
                            I developed this app as a learning project for myself.  I wanted to learn react.js so I decided to create something that I and other people would find useful and fun. I based it off of the Cyrus Duel Calculator for mobile and added some other features to it that I thought would be handy.  This is just a web app and I hope to eventually convert it to a full fledged desktop and mobile app. I will continue to add features and effects to this as I go.  Enjoy!
                        </p>
                        <p>
                            If you would like to see what else I have created you can visit my website at <a href="https://hjrdave.github.io/portfolio/" target="_blank" rel="noopener noreferrer">hjrdave.github.io/portfolio/</a>.
                        </p>
                        <p className="pt-4">
                            <a href="https://github.com/hjrdave/DuelCalculator" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </p>
                        <p>
                            Want to contribute? Click <a href="https://github.com/hjrdave/DuelCalculator" target="_blank" rel="noopener noreferrer">here</a>
                        </p>
                    </Col>
                </Row>
            </Content>
        </>
    )
}