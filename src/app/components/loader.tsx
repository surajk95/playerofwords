'use client'
import { useScoreStore } from './store'
import styles from './loader.module.css'
import { secondaryFont } from '@/config/fonts'

export default function Loader() {
    const loading = useScoreStore((state) => (state.loading))

    return loading ? (
        <div className={`${styles.loader} ${secondaryFont.className}`}>Loading dictionary...</div>
    )
        : null
}