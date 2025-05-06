import styles from "./Footer.module.css"


const FooterWeb = () => {
  return (
    <div className={styles.web}>
        <h4 className={styles.title}>Follow Us on Social</h4>
        <div className={styles.icons}>
            <img className={styles.icon} src="/Icons/Social-Media/Whatsapp.svg" alt="WhatsApp" />
            <img className={styles.icon} src="/Icons/Social-Media/Instagram.svg" alt="Instagram" />
            <img className={styles.icon} src="/Icons/Social-Media/Tiktok.svg" alt="Tiktok" />
        </div>
        
    </div>
  )
}

export default FooterWeb