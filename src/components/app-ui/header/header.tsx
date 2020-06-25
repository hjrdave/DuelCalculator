import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {updateStore, useTreble} from 'treble-gsm';
import './_header.scss';

export default function Header() {

    const [{settingsMenuState}, dispatch] = useTreble();

    return (
        <>
            <Navbar className='header d-flex justify-content-between'>
                <Navbar.Text><i className="fas fa-cog cursor" onClick={() => updateStore('updateSettingsMenuState', settingsMenuState, dispatch, {toggle: true})}></i></Navbar.Text>
                <Navbar.Brand href="#home"><Link to={'/'}>DuelCalculator.js</Link></Navbar.Brand>
                <Navbar.Text><i className="fas fa-expand cursor"></i></Navbar.Text>
            </Navbar>
        </>
    )
}