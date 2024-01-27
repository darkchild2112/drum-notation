import styles from "./stave.module.css";

export default function Stave({ children }) {
  return (
    <section className={styles.stave}>
      {children}
    </section>
  )
}