import React from 'react';
import { updateStore, useTreble } from 'treble-gsm';
import './_settings-menu.scss';

export default function SettingsMenu() {

    const [{settingsMenuState}, dispatch] = useTreble();

    return (
        <>
            <div className={`settings-menu-backdrop ${(settingsMenuState) ? 'settings-menu-active' : ''}`}>
                <div className='settings-menu'>
                    <div className='settings-menu-header d-flex justify-content-between align-items-center p-3 px-4'>
                        <p></p>
                        <h3>Settings</h3>
                        <i className="fas fa-times cursor" onClick={() => updateStore('updateSettingsMenuState', settingsMenuState, dispatch, {toggle: true})}></i>
                    </div>
                </div>
            </div>
        </>
    )
}