
interface ParamsProps {
    params: {
        id: string
    }
}


export default function UniqueRepo({ params }: ParamsProps) {

    if (!params?.id) return <p>Carregando...</p>

    return (
        <>
            <div>
                <h1>pagina dinamica {params.id}</h1>
            </div>
        </>
    )
}