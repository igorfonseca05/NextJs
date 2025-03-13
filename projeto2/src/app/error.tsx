'use Client'

import Link from "next/link"

export default function Error({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) {
    return (
        <div>
            <h1>Opps algo deu errado!</h1>
            <Link href={'/contato'}>Voltar pagina contato</Link>
        </div>
    )
}