import styles from './Banner.module.css'

type BannerProps = {
    src: string;
    alt: string;
    text?: React.ReactNode;
    em?: string;
}

const Banner = ({ src, alt, text, em }: BannerProps) => {
  return (
    <>
        <img src={src} alt={alt} className={styles.banner}/>
        <div className={styles.overlay}>
            <h1 className={styles.title}>{text}<em className={styles.em}>{em}</em></h1>
            <div></div>
        </div>
    </>
  )
}

export default Banner