import styles from "./Footer.module.css"

const FooterInfo = () => {
  return (
    <div className={styles.opening}>
        <h4 className={styles.title}>Opening Hours</h4>
        <span>Monday - Friday -- 4pm to 12am</span>
        <span>ola@luzecena.com.br</span>
        <span>0800 541 320</span>
    </div>
  )
}

export default FooterInfo