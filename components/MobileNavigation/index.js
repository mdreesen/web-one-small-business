// Import Styling
import styles from '../../styles/MobileNavigation.module.css';

// Import Navigation Data
import navData from '../../utils/navigationData.json';

export default function MobileNavigation() {

    const navigationEl = navData?.navigation.map((item, index) => <li key={`card-${index}`}><a href="#">{item?.title}</a></li>)

    const burger = (
        <div className={styles['burger']}>
            <span />
        </div>
    )

    return (
        <div>
            {burger}
            <nav>
                <ul className={styles['navigation']}>
                    {navigationEl}
                </ul>
            </nav>
        </div>
    )
}