import { Parallax } from "react-parallax";
import styles from '../../styles/Hero.module.css';

export default function Hero(props) {
    return (
        <Parallax className={styles['heroImage']} bgImage={`/images/${props.heroImage}.webp`}>
            <h1 className={styles['content']}>
                QUALITY-DRIVEN CONSTRUCTION.<br />
                CLIENT-TAILORED EXPERIENCES.
            </h1>
        </Parallax>
    )
}