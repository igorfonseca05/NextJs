import { Suspense } from "react"

interface Placeholder {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export async function Link() {

    // await new Promise(resolve => setTimeout(() => resolve(''), 3000))
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const dado: Placeholder = await res.json()

    return (
        <div>
            <Suspense fallback={<p>Carregando...</p>}>
                <p>{dado.title}</p>
            </Suspense>
        </div>
    )

}