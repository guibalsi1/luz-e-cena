import Tag from '../Tag'
import styles from './CardMovie.module.css'
import type { Movie } from '../../types'

const CardMovie = (props: Movie) => {
    const { title, src, alt, genres, category, duration, age } = props
  return (
    <li className={styles.cardMovie}>
        <img src={src} alt={alt}></img>
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.info}>
                <div className={styles.line1}>
                    <p>{genres}</p>
                    <Tag value={category}/>
                </div>
            </div>
            <div className={styles.line2}>
                <p>{duration}</p>
                <Tag value={age}/>
            </div>
        </div>
    </li>
  )
}

export default CardMovie