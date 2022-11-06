import { Params } from 'react-router-dom';

export declare namespace DuelBoard {
    interface PlayerData {
        name: string;
        number: number;
        lifePoints: number;
        prevLifePoints: number;
    }
    interface RouteParams extends Params {
        operator: 'minus' | 'add';
        playerNumber: '1' | '2' | '3' | '4';
    }
    type DiceSides = (1 | 2 | 3 | 4 | 5 | 6);
}