import { createStore, useTreble, TrebleGSM } from 'treble-gsm';
import { DuelBoard } from '../interfaces';

export interface IState {
    playerAmount: number;
    playerData: DuelBoard.PlayerData[];
    isAnimatedBKEnabled: boolean;
}

const actionKeys = {
    ['updatePlayerAmount']: 'updatePlayerAmount',
    ['updatePlayerData']: 'updatePlayerData',
    ['enableAnimatedBK']: 'enableAnimatedBK'
}
type TActions = typeof actionKeys;

const Store = createStore([
    {
        action: actionKeys.updatePlayerAmount,
        state: {
            playerAmount: 2
        }
    },
    {
        action: actionKeys.enableAnimatedBK,
        state: {
            isAnimatedBKEnabled: false
        }
    },
    {
        action: actionKeys.updatePlayerData,
        state: {
            playerData: [
                {
                    name: 'Player 1',
                    number: 1,
                    lifePoints: 8000,
                    prevLifePoints: 8000,
                    hitZero: false
                },
                {
                    name: 'Player 2',
                    number: 2,
                    lifePoints: 8000,
                    prevLifePoints: 8000,
                    hitZero: false
                }
            ]
        }
    }

]);

export const useAppStore = () => useTreble<IState, TrebleGSM.Dispatchers, TrebleGSM.Utilities<TActions>>();

export default Store;

