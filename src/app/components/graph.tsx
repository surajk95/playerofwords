'use client'
import { useEffect, useState } from "react"
import { useScoreStore } from "./store"
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default function Graph() {
    const speed = useScoreStore((state) => (state.speed))
    const [speedList, setSpeedList] = useState<number[]>([]);

    useEffect(() => {
        setSpeedList((speedList) => [...speedList, speed]);
    }, [speed])

    return (
        <div style={{ width: '100%', height: '200px' }}>
            Graph
            <Sparklines data={speedList} limit={10}>
                <SparklinesLine style={{ fill: "none" }} />
                <SparklinesSpots />
            </Sparklines>
        </div>
    )
}