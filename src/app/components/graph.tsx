'use client'
import { useEffect, useState } from "react"
import { useScoreStore } from "./store"
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import { useShallow } from "zustand/react/shallow";
import styles from './graph.module.css'

export default function Graph() {
    const { speed, startTime } = useScoreStore(
        useShallow((state) => ({ speed: state.speed, startTime: state.startTime }))
    );
    const [speedList, setSpeedList] = useState<number[]>([]);

    useEffect(() => {
        setSpeedList((speedList) => [...speedList, speed])
    }, [speed])

    useEffect(() => {
        if (!startTime) {
            setSpeedList([])
        }
    }, [startTime])

    return (
        <div className={styles.graphContainer} style={{ width: '100%', height: '200px' }}>
            <Sparklines data={speedList} limit={10}>
                <SparklinesCurve style={{ fill: "none", strokeWidth: 3, stroke: 'white' }} />
            </Sparklines>
        </div>
    )
}