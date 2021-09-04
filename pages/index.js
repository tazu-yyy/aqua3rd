import Head from 'next/head'
import styles from '../styles/Home.module.css'
import History from "../components/History"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Info from "../components/Info"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>#湊あくあ３年目の軌跡（非公式ファンサイト）</title>
        <meta name="twitter:card" content="summary" key={"twitter_card"} />
        <meta property="og:url" content="https://wwww.湊あくあ.moe" key={"og_url"}/>
        <meta property="og:type" content="website" key={"og_type"}/>
        <meta property="og:title" content="#湊あくあ３年目の軌跡（非公式ファンサイト）" key={"og_title"}/>
        <meta property="og:description" content="#湊あくあ３年目の軌跡（非公式ファンサイト） ホロライブ所属バーチャルアイドルゲーマー猫耳メイドの湊あくあ、３年目の歴史を振り返ろう" key={"og_description"}/>
        <meta property="og:site_name" content="#湊あくあ３年目の軌跡（非公式ファンサイト）" key={"og_site_name"}/>
        <meta property="og:image" content="https://www.湊あくあ.moe/images/fav.png" key={"og_image"}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <History />
      <Footer />
      <Info />
    </div>
  )
}
