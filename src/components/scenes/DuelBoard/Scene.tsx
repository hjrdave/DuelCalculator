import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Content from '../../common/Content';
import Player from '../../common/Player';
import UtilityBar from '../../common/UtilityBar';
import useDuelBoard from '../../hooks/use-duelboard';

function Scene() {

    const board = useDuelBoard();

    //makes sure previous and current lifepoints are in sync so 
    //counts don't activate everytime pages changes
    React.useEffect(() => {
        return (() => {
            board.preventLifePointCount();
        });
    }, []);

    return (
        <>
            <Content className={'d-flex flex-column justify-content-between'}>
                <Row className='d-flex justify-content-center' style={{ height: '100%' }}>
                    <Col className='d-flex flex-column justify-content-center'>
                        <Row className='d-flex justify-content-center'>
                            {
                                board.playerData.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <Col xs={(board.playerAmount > 2) ? '4' : '5'}>
                                                <Player
                                                    name={item.name}
                                                    number={item.number}
                                                    prevLifePoints={item.prevLifePoints}
                                                    lifePoints={item.lifePoints}
                                                />
                                            </Col>
                                        </React.Fragment>
                                    )

                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <UtilityBar />
            </Content>
        </>
    )
}

export default Scene;