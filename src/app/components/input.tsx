'use client'
import { useEffect, useState } from "react"
import { useScoreStore } from "./store"

export default function Input(props: any) {
    const [input, setInput] = useState<string>('')
    const initDictionary = useScoreStore(state => state.initDictionary);
    const validate = useScoreStore(state => state.validate);

    useEffect(() => {
        initDictionary();
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value.includes(' ')) setInput(event.target.value);
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (input.trim() !== '') {
            validate(input)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Start typing here"
                    value={input}
                    onChange={handleChange}
                    autoFocus
                />
            </form>
        </div>
    )
}