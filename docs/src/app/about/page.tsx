// import { Link } from "lucide-react"

import Link from "next/link"

import clientPromise from "../../../database/mongoConnection"
import { unstable_cache } from "next/cache"

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
    return repos.json()
}

// const getData = async () => {
//     const dbConnection = (await clientPromise).db()
//     const data = await dbConnection.collection('game').find().toArray()
//     return data
// }

const data = await unstable_cache(async () => {
    const dbConnection = (await clientPromise).db()
    const data = await dbConnection.collection('game').find().toArray()
    return data
},
    ['dishes'], {
    tags: ['games']
}
)


export default async function About() {
    // await new Promise(resolve => setTimeout(() => resolve('resolvida'), 2000))
    // const data: GitReposProps[] = await GetRepos()

    const games = await data()
    // const games = await getData()

    console.log(games)


    return (
        <div className="pt-15">
            <h1 className="text-2xl font-bold py-5">Meus repositórios</h1>
            <ul className="flex flex-col">
                {/* {data.map(li => (
                    <Link href={`about/${li.name}`} key={li.id} className="hover:text-gray-400">{li.name}</Link>
                ))} */}
            </ul>
        </div>
    );
};