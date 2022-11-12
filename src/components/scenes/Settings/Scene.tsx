import React from 'react';
import Content from '../../common/Content';
import ConfirmBtns from '../../common/ConfirmBtns';
import Switch from '../../common/Switch';
import { Row, Col } from 'react-bootstrap';
import useDuelBoard from '../../hooks/use-duelboard';

export default function Scene() {

    const board = useDuelBoard();

    return (
        <>
            <Content className={` d-flex justify-content-center`}>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col sm={12} className={'d-flex flex-column '}>
                        <div className={'pb-2'}>
                            <h3 className={'text-center'}>Change DuelBoard Settings</h3>
                        </div>
                        <div className={'pt-4'}>
                            <Switch
                                label={'Enable Animated Background'}
                                checked={board.isAnimatedBKEnabled}
                                onChange={board.enableAnimatedBK}
                            />
                        </div>
                        <div>
                            <ConfirmBtns onCancel={() => { board.goToHome() }} />
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    )
}