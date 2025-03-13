'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) {


    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div>
            <h1>Opps algo deu errado!</h1>
            <button onClick={() => reset()}> Tente novamente</button>
            <Link href={'/contato'}>Voltar pagina contato</Link>
        </div>
    )
}