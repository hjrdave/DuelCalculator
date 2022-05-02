import React from 'react';
import { Navbar } from 'react-bootstrap';
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

    return (
        <>
            <Navbar className={`${styles.header} d-flex justify-content-between`}>
                <Navbar.Text className={styles.navbarText}>
                    <i className={`fas fa-cog cursor ${styles.settingsIcon}`} onClick={() => Store.toggle('updateSettingsMenuState', settingsMenuState)}></i>
                </Navbar.Text>
                <Navbar.Brand href="#home" className={styles.navbarBrand}><Link to={'/'}>DuelCalculator.js</Link></Navbar.Brand>
                <Navbar.Text className={styles.navbarText} onClick={() => ToggleFullscreen()}><i className={`fas ${fullscreenIcon} ${styles.fullScreenIcon} cursor`}></i></Navbar.Text>
            </Navbar>
        </>
    )
}