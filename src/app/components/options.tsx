'use client'
import { useScoreStore } from "./store"
import { useShallow } from "zustand/react/shallow"

const options = [
    'tion',
    'sion',
    'ous',
    'er',
    'ment',
]

export default function Options() {
    const { suffix, setSuffix } = useScoreStore(
        useShallow(state => ({ suffix: state.suffix, setSuffix: state.setSuffix }))
    )

    return (
        <div>Enter words ending with:
            {
                options.map(option => (
                    <span key={option} className={suffix === option ? 'activeSuffix' : ''}>
                        <input
                            type="radio"
                            name="suffix"
                            checked={suffix == option}
                            onChange={() => setSuffix(option)}
                        />
                        {option}
                    </span>
                ))
            }
        </div>
    )
}