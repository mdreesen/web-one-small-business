import styles from '../../styles/Card.module.css';

// Importing card data
import cardData from '../../utils/review.json';

export default function ReviewCard() {

    const cardLayout = cardData?.reviews.map((data, index) => {
        return (
            <div className={styles['card']} key={`card-${index}`}>
                <div className={styles['container']}>
                    <div>
                        <h3 className={styles['cardName']}><b>{data?.name}</b></h3>
                        <i className="fal fa-star" />                    </div>
                    <p className={styles['cardDescription']}>{data?.description}</p>
                </div>
            </div>
        )
    })

    return cardLayout
}