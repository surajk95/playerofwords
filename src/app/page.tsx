import Image from "next/image";
import styles from "./page.module.css";
import Input from "./components/input";
import Score from "./components/score";
import Graph from "./components/graph";
import Options from "./components/options";

export default function Home() {

  return (
    <main className={styles.main}>
      <h1 className={styles.appTitle}>Player of words</h1>
      <div className={styles.appContainer}>
        <div className={styles.mainContent}>
          <Input />
          <Score />
          <Graph />
        </div>
        <Options />
      </div>
    </main>
  );
}
