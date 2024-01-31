import styles from "./rest.module.css";

export default function Rest({type}) {

  const restType = GetRestType(type);
  return (
    <section className={`${styles.rest} ${restType}`}>

    </section>
  )
}

function GetRestType(restType)
{
  switch(restType) {
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