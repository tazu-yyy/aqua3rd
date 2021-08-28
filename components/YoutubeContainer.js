import styles from '../styles/YoutubeContainer.module.css'

export default function YoutubeContainer(props) {
  return (
    <p className={styles['youtube-container']}>
      <iframe className={styles['youtube-iframe']} src={`https://www.youtube.com/embed/${props.movieId}`} title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
    </p>
  )
}
