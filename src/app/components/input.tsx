'use client'
import { useState } from "react"

export default function Input(props: any) {
    const [input, setInput] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value.includes(' ')) setInput(event.target.value);
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (input.trim() !== '') {
            props.handleSubmit()
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