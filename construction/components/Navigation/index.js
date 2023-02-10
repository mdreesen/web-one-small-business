import React, { useState, useEffect } from 'react';

// Import Styling
import styles from '../../styles/Navigation.module.css';

// Import Navigation Data
import navData from '../../utils/navigationData.json';

export default function Navigation() {

    const [navbar, setNavbar] = useState(false);

    const background = () => {
        return window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
    }

    useEffect(() => {
       return window.addEventListener('scroll', background)
    }, []);

    const navigationEl = navData?.navigation.map((item, index) => <li key={`card-${index}`}><a href="#">{item?.title}</a></li>)

    return (
        <nav className={navbar ? styles['background-active'] : styles['background-stable']}>
            <ul className={styles['navigation']}>
                {navigationEl}
            </ul>
        </nav>
    )
}