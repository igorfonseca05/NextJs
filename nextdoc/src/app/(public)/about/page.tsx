
import { Form } from "@/app/components/form/Form"
import { Post } from "@/app/components/Post/Post"

// import { InfosProps } from "@/utils/types"

import { Metadata } from "next"
import { Repo_List } from "./reposList/repoList"
import { Suspense } from "react"
import LoadingFallback from "@/app/components/fallback"


export const metadata: Metadata = {
    title: 'página sobre',
    description: 'Está é a página sobre da minha aplicação'

}


async function getData() {
    try {
        await new Promise((resolve, reject) => setTimeout(() => resolve('resolvido'), 4000))

        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default async function About() {

    const repos = getData()

    // console.log([...Array])

    return (
        <div className="max-w-250 m-auto">
            <h1 className="text-xl">Lorem ipsum dolor.</h1>
            {/* <Form /> */}
            <Suspense fallback={<LoadingFallback />}>
                <Repo_List data={repos} />
            </Suspense>
            {/* <Post infos={infos} /> */}
        </div>
    )
}