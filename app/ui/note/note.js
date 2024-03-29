import styles from "./note.module.css";

export default function Note({type}) {

  const noteType = GetNoteType(type);
  return (
    <section className={`${styles.note} ${noteType}`}>

    </section>
  )
}

function GetNoteType(noteType)
{
  switch(noteType) {
    case "quarter":
      return styles.quarter;
    case "quarter-rest":
        return styles.quarterRest;
    case "eighth":
      return styles.eighth;
    case "sixteenth":
      return styles.sixteenth;
  }
}