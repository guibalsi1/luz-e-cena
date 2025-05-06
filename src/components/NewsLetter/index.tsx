import Button from '../Button'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <section className={styles.newsletter}>
        <h2 className={styles.title}>Subscribe for new discounts!</h2>
        <form className={styles.form}>
            <FieldSet>
                <InputText placeholder='Enter your email' type='email' />
            </FieldSet>
            <Button type='submit' variant='default'>Subscribe</Button>
        </form>
    </section>
  )
}

export default NewsLetter