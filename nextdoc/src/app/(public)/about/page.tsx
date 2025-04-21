
import { Form } from "@/app/components/form/Form"
import { Post } from "@/app/components/Post/Post"

import { Suspense } from "react"


interface InfosProps {
    avatar_url: string
    name: string
    bio: string
    blog: string
    location: string
    public_repos: number
    html_url: string
}

async function getData() {
    try {
        await new Promise((resolve, reject) => setTimeout(() => resolve('resolvido'), 1000))

        const res = await fetch('https://api.github.com/users/igorfonseca05')
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default async function About() {

    const infos: InfosProps = await getData()

    return (
        <div className="max-w-250 m-auto">
            <h1 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum, consectetur, quae iste earum odio quidem reiciendis ad accusamus, possimus facere voluptatibus rem illum natus quasi porro voluptas eligendi quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum, consectetur, quae iste earum odio qumus facere voluptatibus rem illum natus quasi porro voluptas eligendi quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum, consectetur, quae iste earum odio quidem reiciendis ad accusamus, possimus facere voluptatibus rem illum natus quasi porro voluptas eligendi quibusdam.</h1>
            <Suspense fallback={<div>Carregando...</div>}>
                <div className="bg-gray-50 mt-6">
                    <p>{infos.public_repos}</p>
                </div>
            </Suspense>

            <Form />

            {/* <Post infos={infos} /> */}
        </div>
    )
}