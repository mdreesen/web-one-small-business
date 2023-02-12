import React, { useState, useEffect } from 'react';
import Image from 'next/image'

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
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
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className={navbar ? styles['background-active mb-3'] : styles['background-stable mb-3']}>
                    <Container fluid>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

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
                                <Nav className="justify-content-end flex-grow-1 pe-3">
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