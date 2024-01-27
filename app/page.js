import styles from "./page.module.css";

import Stave from "./ui/stave/stave";
import Bar from "./ui/bar/bar";
import Note from "./ui/note/note";
import Line from "./ui/line/line";

// Stealing a lot from here:
// https://codepen.io/gvissing/pen/BKmmpJ

// Drum Key
// https://www.onlinedrummer.com/pages/drum-key

export default function Home() {
  return (
    <main className={styles.main}>
      <Stave>
        <Bar>
          <Line drumType="high-hat">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </Line>
          <Line drumType="snare">
            <Note />
            <Note />
          </Line>
          <Line drumType="bass-drum">
            <Note />
            <Note />
          </Line>
        </Bar>
        <Bar />
        <Bar />
      </Stave>
    </main>
  );
}
