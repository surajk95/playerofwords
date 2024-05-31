import styles from "./page.module.css";
import Input from "./components/input";
import Score from "./components/score";
import Graph from "./components/graph";
import Options from "./components/options";
import Error from "./components/error";
import Loader from "./components/loader";
import { secondaryFont } from "@/config/fonts";

export default function Home() {

  return (
    <main className={styles.main}>
      <h1 className={`${styles.appTitle} ${secondaryFont.className}`}>Player<br />of<br />words</h1>
      <a className={`${styles.attribution} ${secondaryFont.className}`} href="https://github.com/surajk95/playerofwords">github</a>
      <div className={styles.appContainer}>
        <div className={styles.mainContent}>
          <Loader />
          <Input />
          <Error />
          <div className={styles.scoreHeader}>Score</div>
          <Score />
          <Graph />
        </div>
        <Options />
      </div>
    </main>
  );
}
