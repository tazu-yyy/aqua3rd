import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <div style={{ textAlign: 'center' }}>
        <div className={styles['banner-container']}>
          <img className={styles['banner-frame']} src={"/images/frame.png"} />
          <img className={styles['banner-image']} src={"https://img.youtube.com/vi/CtOkB0YQljY/maxresdefault.jpg"} />
        </div>
        <div className={styles['title-container']}>
          <div>
            <a href={"https://www.youtube.com/watch?v=CtOkB0YQljY"} target={"_blank"}>
              <img src={"/images/youtube.png"} width={"50px"} />
            </a>
          </div>
          <div className={`${styles.title} ${styles.animate}`}>
            <span>#</span>
            <span>湊</span>
            <span>あ</span>
            <span>く</span>
            <span>あ</span>
            <br className={styles["break-on-sp"]} />
            <br className={styles["placeholder"]} />
            <span>３</span>
            <span>年</span>
            <span>目</span>
            <span>の</span>
            <span>軌</span>
            <span>跡</span>
          </div>
        </div>
        <div className={styles['description-container']}>
          <div className={styles.description}>
            当サイトは非公式ファンサイトです
          </div>
        </div>
      </div>
    </div>
  )
}
