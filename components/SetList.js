import styles from '../styles/SetList.module.css'
import {useState, useEffect} from "react"

export default function SetList(props) {
  const [setList, setSetList] = useState(null)
  const [showSetList, setShowSetList] = useState(false)
  let previousMonth = null

  const slideOut = (el) => el.classList.add(styles.none)
  const toggleSetList = () => {
    if (window.scrollY > 150) {
      setShowSetList(true)
    } else {
      setShowSetList(false)
    }
  }
  const displayedMonth = (month) => {
    if (month <= 12) return month
    return (month % 13) + 1
  }

  const fadeOutItem = (history) => {
    return(
      <li
        key={history.id}
        className={styles['fade-out']}
        onAnimationEnd={(e) => slideOut(e.target)}>
        <a href={`#${history.id}`}>
          <span className={styles["set-date"]}>{history.date + ' '}</span>
          <span>{history.title + (history.subTitle ? history.subTitle : '')}</span>
        </a>
      </li>
    )
  }

  const fadeInItem = (history, over) => {
    over ||= false

    return(
      <li
        key={history.id}
        className={`${styles['fade-in']} ${over ? styles.over : null}`}>
        <a href={`#${history.id}`}>
          <span className={styles["set-date"]}>{history.date + ' '}</span>
          <span>{history.title + (history.subTitle ? history.subTitle : '')}</span>
        </a>
      </li>
    )
  }

  const handleScroll = () => {
    props.histories.forEach((history) => {
      const el = document.getElementById(history.id)
      history.scrollTop = el.offsetTop
    })

    // const windowY = window.scrollY - 781
    const windowY = window.scrollY - (window.innerHeight / 2)
    let nearestIndex = null
    let minDistance = 1000000
    toggleSetList()
    for(let i = 0; i < props.histories.length; i += 1) {
      const distance = Math.abs(windowY - props.histories[i].scrollTop)
      if (distance < minDistance) {
        nearestIndex = i
        minDistance = distance
      }
    }

    const currentMonth = props.histories[nearestIndex].month
    if (currentMonth === previousMonth) return
    if (previousMonth === null) previousMonth = 0

    const tmpSetList = []
    let fadeInCounter = 0
    if (currentMonth >= previousMonth) {
      for (let i = 0; i < props.histories.length; i += 1) {
        if (props.histories[i].month > currentMonth) break;
        if (props.histories[i].month !== currentMonth && props.histories[i].month !== currentMonth - 1) continue;

        if (props.histories[i].month === currentMonth - 1) {
          tmpSetList.push(fadeOutItem(props.histories[i]))
        } else {
          fadeInCounter += 1
          if (fadeInCounter >= 4) {
            tmpSetList.push(fadeInItem(props.histories[i], true))
          } else {
            tmpSetList.push(fadeInItem(props.histories[i], false))
          }
        }
      }
    } else {
      for (let i = 0; i < props.histories.length; i += 1) {
        if (props.histories[i].month > currentMonth + 1) break;
        if (props.histories[i].month !== currentMonth && props.histories[i].month !== currentMonth + 1) continue;

        if (props.histories[i].month === currentMonth + 1) {
          tmpSetList.push(fadeOutItem(props.histories[i]))
        } else {
          fadeInCounter += 1
          if (fadeInCounter >= 4) {
            tmpSetList.push(fadeInItem(props.histories[i], true))
          } else {
            tmpSetList.push(fadeInItem(props.histories[i], false))
          }
        }
      }
    }

    if (fadeInCounter >= 4) {
      tmpSetList.push(
        <li
          key={"over-placeholder"}
          className={styles["over-placeholder"]}>
          <span>・・・（他{`${fadeInCounter - 3}件`}）</span>
        </li>
      )
    }
    setSetList(
      <ul data-month={`${displayedMonth(currentMonth)}月の set lest`}>{tmpSetList.map((list) => list)}</ul>
    )

    previousMonth = currentMonth
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`${styles['set-list']} ${showSetList ? styles['show'] : styles['none']}`}>
      {setList}
    </div>
  )
}
