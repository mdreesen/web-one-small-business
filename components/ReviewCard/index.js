import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from '../../styles/Card.module.css';

// Importing card data
import cardData from '../../utils/review.json';

export default function ReviewCard() {
    const cardLayout = cardData?.reviews.map((data, index) => {

        const starLayout = data?.starCount.map((item, index) => {
            if (index + 1 === item) return <FontAwesomeIcon key={`star-${index}`} className={styles['starGold']} icon={faStar} />
        })

        return (
            <div className={styles['card']} key={`card-${index}`}>
                <div className={styles['container']}>
                    <div className={styles['container-name']}>
                        <h3 className={styles['cardName']}>{data?.name}</h3>
                        <div className={styles['starContainer']}>{starLayout}</div>
                    </div>
                    <span className={styles['cardDescription']}>{data?.description}</span>
                </div>
            </div>
        )
    })

    return cardLayout
}