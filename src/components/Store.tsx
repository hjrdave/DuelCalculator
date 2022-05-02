import { createStore, useTreble, TUseTreble } from 'treble-gsm';

export interface IStore {
    settingsMenuState: boolean;
    playerAmount: number;
    playerData: {
        name: string,
        number: number,
        lifePoints: number
    }[];
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
                    name: 'player 1',
                    number: 1,
                    lifePoints: 8000
                },
                {
                    name: 'player 2',
                    number: 2,
                    lifePoints: 8000
                },
                {
                    name: 'player 3',
                    number: 3,
                    lifePoints: 8000
                },
                {
                    name: 'player 4',
                    number: 4,
                    lifePoints: 8000
                }
            ]
        }
    }

]);

export const useAppStore = () => useTreble() as TUseTreble<IStore, TActions>

export default Store;

