import styles from '../styles/Footer.module.css'
import Train from "../components/Train"
import {useState} from "react"

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false)
  const [zoomLast, setZoomLast] = useState(false)
  const [showContinue, setShowContinue] = useState(false)
  const makeZoom = () => {
    setZoomLast(true)
  }

  const makeShowContinue = () => {
    setShowContinue(true)
  }

  return (
    <div className={styles["footer-container"]}>
      <Train setShowFooter={setShowFooter} />
      <div className={styles["sky-container"]}>
        <img src={"/images/last_rail.png"} className={`${styles["rail-image"]} ${showContinue ? styles["fade-in"] : styles["none"]}`}/>
        <img src={"/images/continued.png"} className={`${styles["board-image"]} ${showContinue ? styles["fade-in"] : styles["none"]}`}/>
        <img src={"/images/sky04.png"} className={styles["sky-image"]}/>
      </div>
      <div className={`${styles['footer-youtube-container']} ${showFooter ? styles["fade-in"] : styles["none"]}`} onAnimationEnd={(e) => makeZoom()} >
        <img className={styles["third-board"]} src={"images/3rd_board.png"} />
        <img className={styles['station-image']} src={"/images/station.png"} />
        <div className={styles['youtube-container']}>
          <iframe className={`${styles['youtube-iframe']} ${zoomLast ? styles["zoom"] : null}`} src={`https://www.youtube.com/embed/tuWw5EQPGlc`} title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen onAnimationEnd={makeShowContinue} />
        </div>
      </div>
    </div>
  )
}
