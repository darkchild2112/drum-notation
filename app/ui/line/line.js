import styles from "./line.module.css";

export default function Line({children, drumType}) {

  const topPosition = GetNotePosition(drumType);
  
  return (
    <section className={`${styles.line} ${topPosition}`}>
      {children}
    </section>
  )
}

function GetNotePosition(drumType)
{
  switch(drumType) {
    case "snare":
      return styles.snare;
    case "bass-drum":
      return styles.bassDrum;
    default:
      return styles.highHat;
  }
}