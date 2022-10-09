import React from 'react';
import { Button, Offcanvas, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTreble } from 'treble-gsm';
import styles from './header.module.scss';

interface IDocument {
    exitFullscreen?: any;
    mozCancelFullScreen?: any;
    webkitExitFullscreen?: any;
    fullscreenElement?: any;
    mozFullScreenElement?: any;
    webkitFullscreenElement?: any;
    msFullscreenElement?: any;
    documentElement?: any;
    msExitFullscreen?: any;
}

export default function Header() {

    const [{ settingsMenuState }, Store] = useTreble();
    const [fullscreenIcon, setFullscreenIcon] = React.useState('fa-expand');

    const ToggleFullscreen = () => {
        const doc: IDocument = document;
        const isInFullScreen = (doc.fullscreenElement && doc.fullscreenElement !== null) ||
            (doc.webkitFullscreenElement && doc.webkitFullscreenElement !== null) ||
            (doc.mozFullScreenElement && doc.mozFullScreenElement !== null) ||
            (doc.msFullscreenElement && doc.msFullscreenElement !== null);

        const docElm = doc.documentElement;
        if (!isInFullScreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
            setFullscreenIcon("fa-compress-arrows-alt");
        } else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            setFullscreenIcon("fa-expand");
        }
    }

    const [showSettings, setShowSettings] = React.useState(false);

    const openSettingsMenu = () => setShowSettings(true);
    const closeSettingsMenu = () => setShowSettings(false);

    return (
        <>
            <Navbar className={`${styles.header} d-flex justify-content-between`}>
                <Navbar.Text className={`px-3 ${styles.navbarText}`}>
                    <i className={`fas fa-cog cursor ${styles.settingsIcon}`} onClick={() => openSettingsMenu()}></i>
                </Navbar.Text>
                <Navbar.Brand className={styles.navbarBrand}><Link to={'/'}>DuelCalculator.js</Link></Navbar.Brand>
                <Navbar.Text className={`px-3 ${styles.navbarText}`} onClick={() => ToggleFullscreen()}><i className={`fas ${fullscreenIcon} ${styles.fullScreenIcon} cursor`}></i></Navbar.Text>
            </Navbar>
            <Offcanvas show={showSettings} onHide={closeSettingsMenu} >
                <Offcanvas.Header closeButton className={`${styles.settingsMenu}`}>
                    <Offcanvas.Title>Settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.settingsMenu}>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}