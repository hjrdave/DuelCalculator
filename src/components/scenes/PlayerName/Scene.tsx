import React from 'react';
import { DuelBoard } from '../../../interfaces';
import Content from '../../common/Content';
import ConfirmBtns from '../../common/ConfirmBtns';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PlayerNameInput from '../../common/PlayerNameInput';
import useDuelBoard from '../../hooks/use-duelboard';

export default function Scene() {

    const params = useParams<DuelBoard.RouteParams>();
    const board = useDuelBoard({
        activePlayer: params.playerNumber
    });
    const [name, setName] = React.useState(board.getPlayerName() || `Player ${params.playerNumber}`);

    return (
        <>
            <Content className={` d-flex justify-content-center`}>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col sm={8} className={'d-flex flex-column '}>
                        <div className={'pb-2'}>
                            <h3 className={'text-center'}>Change Player Name</h3>
                        </div>
                        <div className={'pt-4'}>
                            <PlayerNameInput
                                name={name}
                                onChange={(value) => setName(value)}
                            />
                        </div>
                        <div>
                            <ConfirmBtns confirmLabel='Save' onConfirm={() => { board.setPlayerName(name); board.goToHome() }} />
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    )
}