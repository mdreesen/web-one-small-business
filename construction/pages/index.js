import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

// Importing Components
import Hero from "../components/Hero";
import Card from '../components/ReviewCard';

// Import Data
import homepageData from '../utils/homeData.json';

export default function Home() {

  const sectionOne = <Hero heroImage={'image_home'} />

  const sectionTwo = (
    <section className={styles['sectionTwo']}>
      <h2>EXPERIENCE MATTERS.</h2>
      <div className={styles['container']}>
        <div className={styles['homeImage']}>
          {/* <Image
            src="/images/home-design.webp"
            alt="Mission Mountains handy work of bedroom"
            position="relative"
            fill
          /> */}
        </div>
        <span>{homepageData?.description}</span>
      </div>
    </section>
  )

  const sectionThree = (
    <section className={styles['sectionThree']}>
      <Card/>
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
      </main>
    </>
  )
}
