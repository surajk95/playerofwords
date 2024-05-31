'use client'
import { useShallow } from 'zustand/react/shallow'
import { useScoreStore } from './store'
import styles from './score.module.css'

export default function Score() {
  const { score, speed, resetState } = useScoreStore(
    useShallow((state) => ({ score: state.score, speed: state.speed, resetState: state.resetState }))
  )

  return (
    <div className={styles.scoreContainer}>
      <div className={styles.score}>
        {score}
        <div className={styles.reset} onClick={resetState}>reset</div>
      </div>
      <div className={styles.speed}>at <b>{speed}</b> words per minute</div>
    </div>
  )
}