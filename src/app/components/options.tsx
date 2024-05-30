'use client'
import { useScoreStore } from "./store"
import { useShallow } from "zustand/react/shallow"
import styles from './options.module.css'
import { secondaryFont } from "@/config/fonts"

const options = [
    'tion',
    'sion',
    'ous',
    'or',
    'er',
    'ment',
    'al',
    'el',
    'ogy',
    'my',
    'ny'
]

export default function Options() {
    const { suffix, setSuffix } = useScoreStore(
        useShallow(state => ({ suffix: state.suffix, setSuffix: state.setSuffix }))
    )

    return (
        <div className={`${styles.options} ${secondaryFont.className}`}>
            <div className={styles.prompt}>Choose a suffix:</div>
            {
                options.map(option => (
                    <div
                        key={option}
                        className={`${styles.option} ${suffix === option ? styles.activeSuffix : ''}`}
                        onClick={() => setSuffix(option)}
                    >
                        {option}
                    </div>
                ))
            }
        </div>
    )
}