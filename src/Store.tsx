import { createStore } from 'treble-gsm';

const Store = createStore([
    {
        action: 'updateSettingsMenuState',
        state: {
            settingsMenuState: false
        }
    }    

]);

export default Store;

