import styles from '../styles/Train.module.css'
import {useEffect, useState} from "react"

export default function Train(props) {
  const [showTrain, setShowTrain] = useState(false)
  const [notFadeOut, setNotFadeOut] = useState(true)
  const [neverShowTrain, setNeverShowTrain] = useState(false)

  const handleScroll = () => {
    const windowY = window.scrollY
    const lowerLimit = document.getElementById("train-container").offsetTop - 500
    if (windowY < 200 || windowY > lowerLimit) {
      if (windowY > lowerLimit) {
        setNotFadeOut(false)
        setNeverShowTrain(true)
        props.setShowFooter(true)
      } else {
        setNotFadeOut(true)
      }
      setShowTrain(false)
    } else {
      setShowTrain(true)
    }
  }

  const handleAnimation = (e) => {
    if(e.animationName === styles["fade-out"]) {
      e.target.classList.add(styles.none)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={"train-container"} id={"train-container"}>
      <img src={"/images/train.gif"} className={`${styles["train-image"]} ${showTrain && !neverShowTrain ? null : (notFadeOut ? styles.none : styles["fade-out"])}`} onAnimationEnd={(e) => handleAnimation(e)}/>
    </div>
  )
}
