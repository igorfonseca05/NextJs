

interface RepoProps {
    params: {
        id: string
    }
}


export default function Repositorio({ params }: RepoProps) {

    return (
        <>
            <h1>Recebido {params.id} como parametros</h1>
        </>
    )
}