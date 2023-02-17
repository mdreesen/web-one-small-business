import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../../styles/MobileNavigation.module.css';

// Import Navigation Data
import navData from '../../utils/navigationData.json';


export default function MobileNavigation() {

    const [navbar, setNavbar] = useState(false);

    const background = () => {
        return window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
    }

    useEffect(() => {
        return window.addEventListener('scroll', background)
    }, []);

    const navigationEl = navData?.navigation.map((item, index) => <Nav.Link key={`link-${index}`} href="#action1">{item?.title}</Nav.Link>)

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg={navbar ? styles['navbar-active'] : styles['navbar']} expand={expand} className={styles['navigation']}>
                    <Container fluid>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                            <div className={styles['m-n-container']}>
                                <div className={styles['m-n-border']}></div>
                                <div className={styles['m-n-border']}></div>
                            </div>
                        </Navbar.Toggle>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Image
                                        className={styles['secondaryImage']}
                                        src="/images/logo_inhanced_noBackground.webp"
                                        alt="Mission Mountains handy work of bedroom"
                                        position="relative"
                                        width={222}
                                        height={108}
                                    />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="flex-grow-1 pe-3">
                                    {navigationEl}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}