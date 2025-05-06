import Logo from "../Logo"
import styles from "./Footer.module.css"


const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src="/Logo and Favicon/Logo.svg" alt='Logo'/>
        <p>Where Fantasy and Reality is the same thing!</p>
    </div>
  )
}

export default FooterLogo