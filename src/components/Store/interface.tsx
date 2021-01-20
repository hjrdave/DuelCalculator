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
export type TActions = typeof actionKeys;