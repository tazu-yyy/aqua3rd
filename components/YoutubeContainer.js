import styles from '../styles/YoutubeContainer.module.css'

export default function YoutubeContainer(props) {
  return (
    <p className={styles['youtube-container']}>
      <a href={`https://www.youtube.com/watch?v=${props.movieId}`} target={"_blank"} rel="noopener noreferrer">
        <img src={`http://img.youtube.com/vi/${props.movieId}/sddefault.jpg`} className={styles.thumbnail} />
      </a>
    </p>
  )
}
