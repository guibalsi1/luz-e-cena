import styles from "./Footer.module.css"

const FooterInstitutional = () => {
  return (
    <div className={styles.institutional}>
        <h4 className={styles.title}>Institutional</h4>
        <span>About Us</span>
        <span>For Companies</span>
        <span>Plus Club</span>
    </div>
  )
}

export default FooterInstitutional