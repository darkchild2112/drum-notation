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
    case "tom-one":
        return styles.tomOne;
    case "tom-two":
        return styles.tomTwo;
    case "floor-tom":
        return styles.floorTom;
    default:
      return styles.highHat;
  }
}