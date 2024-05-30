'use client'
import { useEffect, useState } from "react"
import { useScoreStore } from "./store"
import styles from './input.module.css'

export default function Input(props: any) {
    const [input, setInput] = useState<string>('')
    const initDictionary = useScoreStore(state => state.initDictionary);
    const validate = useScoreStore(state => state.validate);
    const enteredWords = useScoreStore(state => state.enteredWords);

    useEffect(() => {
        initDictionary();
    }, [])

    useEffect(() => {
        setInput('')
    }, [enteredWords])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value.includes(' ')) setInput(event.target.value.toLowerCase());
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (input.trim() !== '') {
            validate(input)
        }
    }
    return (
        <div className={styles.inputContainer}>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="type here"
                    value={input}
                    onChange={handleChange}
                    autoFocus
                    className={styles.input}
                />
            </form>
        </div>
    )
}