import styles from './InputText.module.css'

const InputText = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...rest} className={styles.input}/>
  )
}

export default InputText