

interface DataProps {
    id: string
    name: string,
    description: string
}


async function getRepos() {

    try {

        const res = await fetch('https://api.github.com/users/igorfonseca05/repos')

        if (!res.ok) {
            throw new Error('Error ao obter dados')
        }

        return res.json()

    } catch (error) {
        console.log(error)
    }

}



export default async function Repo() {
    const data: DataProps[] = await getRepos()

    return (
        <>
            <h1>Pagina de repositório</h1>
            <p>Aqui mostramos meus repositórios</p>
            {data.map((item) => (
                <div key={item.id} style={{ width: '50%' }}>
                    <strong style={{ cursor: 'pointer' }}>{item.name}</strong>
                    <p>{item.description}</p>
                </div>
            ))}

        </>
    )
}