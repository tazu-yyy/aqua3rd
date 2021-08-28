import styles from '../styles/YoutubeContainers.module.css'
import YoutubeContainer from "./YoutubeContainer"
import {useState, useRef} from "react"

export default function YoutubeContainers(props) {
  const collapseElement = useRef(null)
  const [collapsedFlg, setCollapsedFlg] = useState(true)

  const slideUp = (el, duration) => {
    el.style.height = `calc(${el.offsetHeight}px + 1em)`;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  };

  const slideDown = (el, duration) => {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = `calc(${height}px + 1em)`;
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  };

  const triggerCollapseDetail = () => {
    if (collapsedFlg) {
      setCollapsedFlg(false)
    } else {
      setCollapsedFlg(true)
    }

    const el = collapseElement.current
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, 250);
    } else {
      return slideUp(el, 250);
    }
  }

  const renderMedia = (media) => {
    if (media.type === 'youtube') {
      return <YoutubeContainer key={media.id} movieId={media.id}/>
    } else if (media.type === 'image') {
      const img = <img src={`/images/${media.src}`} className={styles['image-container']}/>

      if (media.link) {
        return <p key={media.src}><a href={media.link} target="_blank">{img}</a></p>
      } else {
        return <p key={media.src}>{img}</p>
      }
    } else if (media.type === 'image-url') {
      const img = <img src={media.src} className={styles['image-container']}/>

      if (media.link) {
        return <p key={media.src}><a href={media.link} target="_blank">{img}</a></p>
      } else {
        return <p key={media.src}>{img}</p>
      }
    }
  }

  return (
    <div>
      {
        (() => renderMedia(props.medias[0]))()
      }
      {
        (() => {
          if (props.medias.length > 1) {
            return (
              <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className={styles['detail-button']} onClick={triggerCollapseDetail}>{collapsedFlg ? 'More' : 'Close'}<span style={{ fontSize: '0.7em' }}> {collapsedFlg ? '▼' : '▲'}</span></div>
                </div>
                <div ref={collapseElement} className={`collapse-container ${styles['collapse-container']}`}>
                  {
                    props.medias.slice(1).map((media) => renderMedia(media))
                  }
                </div>
              </div>
            )
          }
        })()
      }
    </div>
  )
}
