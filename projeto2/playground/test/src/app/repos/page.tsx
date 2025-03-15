import Link from "next/link"

interface error {
    message: string,
    documentation_url: string,
    status: string
}

interface data {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    owner: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
    }
}


async function getRepos() {
    try {

        const res = await fetch('https://api.github.com/users/igorfonseca05/repos')

        if (!res.ok) {
            throw new Error('Erro ao obter dados da API')
        }
        return await res.json()

    } catch (error) {
        console.log(error)
    }
}


export default async function page() {
    const data: data[] = await getRepos()

    return (
        <div>
            <h1>Pagina de repositórios</h1>
            <p>Abaixo são mostrados os respositórios do seu github</p>
            {data?.map((item) => (
                <Link href={`/repos/${item.id}`} key={item.id}>{item.name} <br></br></Link>
            ))}
        </div>
    );
};