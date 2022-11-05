import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Davies</title>
        <meta name="mrgdavies website" content="Home of Michael Davies" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header></header>
      <main className={styles.main}>
       
      </main>
    </div>
  )
}

export default Home
