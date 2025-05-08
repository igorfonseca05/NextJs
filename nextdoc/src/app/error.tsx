"use client"

import { useEffect } from "react"

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string },
    reset: () => void
}) {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div>
            <h1>Ops...Something went wrong!</h1>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}