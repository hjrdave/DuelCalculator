import React from 'react';
import Content from '../../common/Content';
import { useAppStore } from '../../Store';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Calculator from '../../common/Calculator';
import styles from './scene.module.scss';

export default function Scene() {
    interface IParams {
        operator: 'minus' | 'add';
        playerNumber: number;
        [key: string]: any;
    }
    const params = useParams<IParams>();
    const navigate = useNavigate();
    const [{ playerData }, Store, Util] = useAppStore();
    const [operator] = React.useState(params.operator);
    const [playerName, setPlayerName] = React.useState('Loading...');
    const [playerNumber] = React.useState(params.playerNumber);
    const [currentLifePoints, setCurrentLifePoints] = React.useState(0);
    const [calcValue, setCalcValue] = React.useState(0);

    React.useEffect(() => {
        playerData.map((player) => {
            if (player.number === Number(playerNumber)) {
                setPlayerName(player.name);
                setCurrentLifePoints(player.lifePoints);
            }
        });
    }, [params.playerNumber]);

    const calculateNewScore = (score: number) => {
        const updatedPlayerData = playerData.map((player) => {
            if (player.number === Number(playerNumber)) {
                return ({
                    ...player,
                    lifePoints: score
                });
            } else {
                return player
            }
        });
        Store.update(Util.actions.updatePlayerData, updatedPlayerData);
    }

    // React.useEffect(() => {
    //     return (() => {
    //         navigate('/');
    //         const updatedPlayerData = playerData.map((player) => {
    //             if (player.number === playerNumber) {
    //                 return {
    //                     ...player,
    //                     lifePoints: calcValue
    //                 }
    //             } else {
    //                 return player;
    //             }
    //         });
    //         Store.update(Util.actions.updatePlayerData, updatedPlayerData);
    //     });
    // }, [calcValue]);

    return (
        <>
            <Content className={`d-flex flex-column justify-content-center`}>
                <Row className='d-flex justify-content-center'>
                    <Col xs={10} className='d-flex justify-content-center'>
                        <h1 className={styles.playerName}>Player: {playerName}</h1>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col xs={10} className={'pt-4'}>
                        <Calculator
                            lifePoints={currentLifePoints}
                            operatorType={operator}
                            onCancel={() => navigate('/')}
                            onEnter={(calcValue: number) => {
                                calculateNewScore(calcValue);
                                navigate('/');
                            }}
                        />
                    </Col>
                </Row>
            </Content>
        </>
    )
}