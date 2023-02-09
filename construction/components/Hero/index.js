import { Parallax } from "react-parallax";
import styles from '../../styles/Hero.module.css';

export default function Hero(props) {
    return (
        <Parallax className={styles['heroImage']} bgImage={`/images/${props.heroImage}.webp`}>
            <span className={styles['content']}>
            QUALITY-DRIVEN CONSTRUCTION.
CLIENT-TAILORED EXPERIENCES.
            </span>
        </Parallax>
    )
}