import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

// Importing Components
import Hero from "../components/Hero";
import Card from '../components/ReviewCard';
import Contact from '../components/Contact';

// Import Data
import homepageData from '../utils/homeData.json';

export default function Home() {

  const sectionOne = <Hero heroImage={'image_home'} />

  const sectionTwo = (
    <section className={styles['sectionTwo']}>
      <h2>EXPERIENCE MATTERS.</h2>
      <div className={styles['container']}>
        <div className={styles['homeImage']}>
          <Image
            className={styles['secondaryImage']}
            src="/images/image-outdoor.webp"
            alt="Mission Mountains handy work of bedroom"
            position="relative"
            width={350}
            height={350}
          />
        </div>
        <span className={styles['text']} dangerouslySetInnerHTML={{ __html: homepageData?.description }}></span>
      </div>
    </section>
  )

  const sectionThree = (
    <section className={styles['sectionThree']}>
      <h2>THE LATEST REVIEWS</h2><br/>
      <h3>See what our clients are saying about us</h3>
      <div className={styles['containerCard']}>
        <Card />
      </div>
    </section>
  )

  const sectionFour = (
    <section className={styles['sectionFour']}>
      <h2>Contact Us</h2>
      <div className={styles['containerRow']}>
        <div className={styles['containerContent']}>
          <h3>QUESTIONS? WE HAVE ANSWERS.</h3>
          <p>Location: Kalispell, MT 59901</p>
          <p>Phone: (406) 345-6484</p>
        </div>
        <Contact />
      </div>
    </section>
  )

  return (
    <>
      <Head>
        <title>Mission Mountain Construction | Home</title>
        <meta name="description" content="Mission Mountain Construction Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {sectionOne}
        {sectionTwo}
        {sectionThree}
        {sectionFour}
      </main>
    </>
  )
}
