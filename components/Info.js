import styles from '../styles/Info.module.css'
import {useState} from "react"

export default function Info() {
  const [showSiteList, setShowSiteList] = useState(false)
  const clickSiteListHandler = () => {
    setShowSiteList(true)
  }

  return (
    <div className={styles.container}>
      <hr />
      <div className={styles["info-items"]}>
        <div className={styles["info-item"]} onClick={clickSiteListHandler}>情報参考サイト</div>
        <div className={styles["info-item"]}><a href={"https://twitter.com/Kongari_Bug"} target={"_blank"} rel="noopener noreferrer">お問い合わせ</a></div>
      </div>
      <div className={`${styles["site-list-container"]} ${showSiteList ? styles["fade-in"] : styles.none}`}>
        <ul className={styles["site-list"]}>
          <li><a href={"https://twitter.com/minatoaqua"} target={"_blank"} rel="noopener noreferrer">湊あくあ 公式Twitter</a></li>
          <li><a href={"https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg"} target={"_blank"} rel="noopener noreferrer">湊あくあ Youtubeチャンネル</a></li>
          <li><a href={"https://seesaawiki.jp/hololivetv/"} target={"_blank"} rel="noopener noreferrer">ホロライブ非公式wiki</a></li>
          <li><a href={"https://prtimes.jp/"} target={"_blank"} rel="noopener noreferrer">PR TIMES</a></li>
        </ul>
      </div>
      <div>
        当サイトは非公式サイトです。<br className={styles["break-on-sp"]} />公式へのお問い合わせはご遠慮ください。
      </div>
      <div style={{marginTop: "5px"}}>
        © 2021 <a href={"https://twitter.com/Kongari_Bug"} target={"_blank"} rel="noopener noreferrer">たづ(@Kongari_Bug)</a>
      </div>
    </div>
  )
}
