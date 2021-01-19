import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTreble } from 'treble-gsm';
import styles from './header.module.scss';

export default function Header() {

    const [{ settingsMenuState }, Store] = useTreble();

    return (
        <>
            <Navbar className={`${styles.header} d-flex justify-content-between`}>
                <Navbar.Text className={styles.navbarText}>
                    <i className={`fas fa-cog cursor ${styles.settingsIcon}`} onClick={() => Store.toggle('updateSettingsMenuState', settingsMenuState)}></i>
                </Navbar.Text>
                <Navbar.Brand href="#home" className={styles.navbarBrand}><Link to={'/'}>DuelCalculator.js</Link></Navbar.Brand>
                <Navbar.Text className={styles.navbarText}><i className="fas fa-expand cursor"></i></Navbar.Text>
            </Navbar>
        </>
    )
}