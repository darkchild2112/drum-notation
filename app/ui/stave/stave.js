import styles from "./stave.module.css";

export default function Stave({ children }) {
  
  const timeSignature = [4,4];
  
  return (
    <section className={styles.stave}>
      <p className={styles.timeSignature}>
        { timeSignature.map(e => (<span key={e}>{e}</span>)) }
      </p>
      {children}
    </section>
  )
}