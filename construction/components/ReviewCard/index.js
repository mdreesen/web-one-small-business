import styles from '../../styles/Card.module.css';

// Importing card data
import cardData from '../../utils/review.json';

export default function ReviewCard() {

    const cardLayout = cardData?.reviews.map((data, index) => {
        return (
            <div className={styles['card']} key={`card-${index}`}>
                {/* <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} /> */}
                <div className={styles['container']}>
                    <h4 className={styles['cardName']}><b>{data?.name}</b></h4>
                    <p className={styles['cardDescription']}>{data?.description}</p>
                </div>
            </div>
        )
    })

    return cardLayout
}