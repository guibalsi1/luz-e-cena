import FooterInfo from "./FooterInfo"
import FooterLogo from "./FooterLogo"
import styles from "./Footer.module.css"
import FooterInstitutional from "./FooterInstitutional"
import FooterWeb from "./FooterWeb"
import FooterDev from "./FooterDev"


const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.footer_info}>
                <FooterLogo />
                <FooterInfo />
                <FooterInstitutional />
                <FooterWeb />
            </div>
        </footer>
        <FooterDev />
    </>
  )
}

export default Footer