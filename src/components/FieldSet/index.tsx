import styles from './FieldSet.module.css'

interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    variant?: 'primary' | 'secondary'; 
}

const FieldSet = ({ children, variant='primary' }: FieldSetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${variant === "primary" ? styles.primary : styles.secondary}`}>
        {children}
    </fieldset>
  )
}

export default FieldSet