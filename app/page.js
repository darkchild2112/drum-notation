import styles from "./page.module.css";

import Stave from "./ui/stave/stave";
import Bar from "./ui/bar/bar";
import Note from "./ui/note/note";
import Line from "./ui/line/line";
import Rest from "./ui/rest/rest";

// Stealing a lot from here:
// https://codepen.io/gvissing/pen/BKmmpJ

// Drum Key
// https://www.onlinedrummer.com/pages/drum-key

// Note Types:
// Whole, Half, Quarter, Eighth, Sixteenth, Thirty-second

export default function Home() {
  return (
    <main className={styles.main}>
      <Stave>
        <Bar>
          <Line drumType="high-hat">
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
          </Line>
          <Line drumType="snare">
            <Rest type="quarter" />
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="quarter" />
          </Line>
          <Line drumType="bass-drum">
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="quarter" />
            <Rest type="quarter" />
          </Line>
        </Bar>
        <Bar>
          <Line drumType="high-hat">
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
            <Note type="sixteenth" />
          </Line>
          <Line drumType="snare">
            <Rest type="quarter" />
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="quarter" />
          </Line>
          <Line drumType="bass-drum">
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="quarter" />
            <Rest type="quarter" />
          </Line>
        </Bar>
      </Stave>
      <Stave>
        <Bar>
          <Line drumType="high-hat">
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
          </Line>
          <Line drumType="snare">
            <Rest type="quarter" />
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="quarter" />
          </Line>
          <Line drumType="bass-drum">
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Rest type="quarter" />
          </Line>
        </Bar>
        <Bar>
          <Line drumType="snare">
            <Note type="eighth" />
            <Note type="eighth" />
          </Line>
          <Line drumType="tom-one">
            <Rest type="quarter" />
            <Note type="eighth" />
            <Note type="eighth" />
          </Line>
          <Line drumType="tom-two">
            <Rest type="quarter" />
            <Rest type="quarter" />
            <Note type="eighth" />
            <Note type="eighth" />
          </Line>
          <Line drumType="floor-tom">
            <Rest type="quarter" />
            <Rest type="quarter" />
            <Rest type="quarter" />
            <Note type="eighth" />
            <Note type="eighth" />
          </Line>
        </Bar>
      </Stave>

      <Stave>
        <Bar>
          <Line drumType="high-hat">
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
            <Note type="eighth" />
          </Line>
          <Line drumType="snare">
            <Rest type="quarter" />
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="quarter" />
          </Line>
          <Line drumType="bass-drum">
            <Note type="quarter" />
            <Rest type="quarter" />
            <Note type="quarter" />
            <Rest type="quarter" />
          </Line>
        </Bar>
      </Stave>
    </main>
  );
}
