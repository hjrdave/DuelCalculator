import { createStore, useTreble, TrebleGSM } from 'treble-gsm';
import { DuelBoard } from '../interfaces';

export interface IState {
    settingsMenuState: boolean;
    playerAmount: number;
    playerData: DuelBoard.PlayerData[];
}

const actionKeys = {
    ['updateSettingsMenuState']: 'updateSettingsMenuState',
    ['updatePlayerAmount']: 'updatePlayerAmount',
    ['updatePlayerData']: 'updatePlayerData'
}
type TActions = typeof actionKeys;

const Store = createStore([
    {
        action: 'updateSettingsMenuState',
        state: {
            settingsMenuState: false
        }
    },
    {
        action: 'updatePlayerAmount',
        state: {
            playerAmount: 2
        }
    },
    {
        action: 'updatePlayerData',
        state: {
            playerData: [
                {
                    name: 'Player 1',
                    number: 1,
                    lifePoints: 8000,
                    prevLifePoints: 8000
                },
                {
                    name: 'Player 2',
                    number: 2,
                    lifePoints: 8000,
                    prevLifePoints: 8000
                }
            ]
        }
    }

]);

export const useAppStore = () => useTreble<IState, TrebleGSM.Dispatchers, TrebleGSM.Utilities<TActions>>();

export default Store;

