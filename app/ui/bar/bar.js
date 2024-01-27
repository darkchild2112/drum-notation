import styles from "./bar.module.css";

export default function Bar({children}) {
  return (
    <section className={styles.bar}>
      {children}
    </section>
  )
}