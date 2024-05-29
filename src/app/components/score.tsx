'use client'
import { useScoreStore } from './store.ts'

export default function Score() {
    const score = useScoreStore((state) => state.score)
    return (
        <div>Score: {score}</div>
    )
}