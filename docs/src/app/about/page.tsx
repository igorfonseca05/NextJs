// import { Link } from "lucide-react"

import Link from "next/link"

import clientPromise from "../../../database/mongoConnection"
import { revalidateTag, unstable_cache } from "next/cache"
import NotFound from "./not-found"

interface GitReposProps {
    id: number,
    name: string,
    full_name: string,
    owner: {
        login: string,
        id: number,
        avatar_url: string
    },
    html_url: string,
    description: string,
}

async function GetRepos() {
    const repos = await fetch('https://api.github.com/users/igorfonseca05/repos')

    if (!repos.ok) {
        <NotFound />
    }

    return repos.json()
}

// const getData = async () => {
//     const dbConnection = (await clientPromise).db('games')
//     const data = await dbConnection.collection('game').find().toArray()
//     return data
// }

// const data = unstable_cache(
//     async () => {
//         const connection = await clientPromise
//         const db = connection.db('games')
//         const collection = db.collection('game')

//         return collection.find().toArray()
//     },
//     ['games'],
//     {
//         tags: ['games'],
//         revalidate: 3000,
//     })

// revalidateTag('games')


export default async function About() {
    // await new Promise(resolve => setTimeout(() => resolve('resolvida'), 2000))
    const data: GitReposProps[] = await GetRepos()

    // if (data.length === 0) {
    //     return "Erro ao obter dados"
    // }

    // const games = await data()

    // console.log(games)


    return (
        <div className="pt-15">
            <h1 className="text-2xl font-bold py-5">Meus repositórios</h1>
            <ul className="flex flex-col">

                {Array.isArray(data) ? data.map(li => (
                    <Link href={`about/${li.name}`} key={li.id} className="hover:text-gray-400">{li.name}</Link>
                )) : <NotFound />
                }

            </ul>
        </div>
    );
};