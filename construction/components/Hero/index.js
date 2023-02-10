import Image from 'next/image'
import { Parallax } from "react-parallax";
import styles from '../../styles/Hero.module.css';

export default function Hero(props) {
    return (
        <Parallax className={styles['heroImage']} bgImage={`/images/${props.heroImage}.webp`}>
            <h1 className={styles['content']}>
                <Image
                    className={styles['secondaryImage']}
                    src="/images/logo_inhanced_noBackground.webp"
                    alt="Mission Mountains handy work of bedroom"
                    position="relative"
                    width={444}
                    height={216}
                />
                QUALITY-DRIVEN CONSTRUCTION.<br />
                CLIENT-TAILORED EXPERIENCES.
            </h1>
        </Parallax>
    )
}