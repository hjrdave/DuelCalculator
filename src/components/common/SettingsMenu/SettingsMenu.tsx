import React from 'react';
import { useTreble } from 'treble-gsm';
import styles from './settingsMenu.module.scss';

export default function SettingsMenu() {

    const [{ settingsMenuState }, Store] = useTreble();

    return (
        <>
            <div className={`${styles.backdrop} ${(settingsMenuState) ? styles.active : ''}`}>
                <div className={(settingsMenuState) ? styles.settingsMenuContainerActive : styles.settingsMenuContainer}>
                    <div className={`${styles.settingsMenuHeader} d-flex justify-content-between align-items-center p-3 px-4`}>
                        <p></p>
                        <h3>Settings</h3>
                        <i className="fas fa-times cursor" onClick={() => Store.toggle('updateSettingsMenuState', settingsMenuState)}></i>
                    </div>
                </div>
            </div>
        </>
    )
}