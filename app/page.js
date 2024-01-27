import styles from "./page.module.css";

import Stave from "./ui/stave/stave";
import Bar from "./ui/bar/bar";
import Note from "./ui/note/note";
import Line from "./ui/line/line";

// Stealing a lot from here:
// https://codepen.io/gvissing/pen/BKmmpJ

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <section className={styles.count}>
        <section>1</section>
        <section>e</section>
        <section>&</section>
        <section>er</section>
        <section>2</section>
        <section>e</section>
        <section>&</section>
        <section>er</section>
        <section>3</section>
        <section>e</section>
        <section>&</section>
        <section>er</section>
        <section>4</section>
        <section>e</section>
        <section>&</section>
        <section>er</section>
      </section> */}
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
