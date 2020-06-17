import React from 'react';
import { Navbar } from 'react-bootstrap';
import './_header.scss';

export default function Header() {

    return (
        <>
            <Navbar className='header d-flex justify-content-between'>
                    <Navbar.Text><i className="fas fa-cog cursor"></i></Navbar.Text>
                    <Navbar.Brand href="#home">DuelCalculator.js</Navbar.Brand>
                    <Navbar.Text><i className="fas fa-expand cursor"></i></Navbar.Text>
            </Navbar>
        </>
    )
}