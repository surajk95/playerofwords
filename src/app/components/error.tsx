'use client'
import { useScoreStore } from './store'

export default function Error() {
  const error = useScoreStore((state) => (state.error))

  return (
    <div className="error">{error}</div>
  )
}