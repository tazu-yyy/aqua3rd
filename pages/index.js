import Head from 'next/head'
import styles from '../styles/Home.module.css'
import History from "../components/History"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>湊あくあ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <History />
      <Footer />
    </div>
  )
}
