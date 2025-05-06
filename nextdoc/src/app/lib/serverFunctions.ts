"use server"

import { redirect } from "next/navigation"

export async function createPost(_prevState: any, formData: FormData) {

    const title = formData.get('title')
    const content = formData.get('content')

    console.log(title, content)

    await new Promise((resolve, reject) => setTimeout(() => resolve('resolvido'), 3000))

    // redirect("/")

    return { message: 'Adicionado com sucesso!' }
}

export async function getData() {
    try {
        await new Promise((resolve, reject) => setTimeout(() => resolve('resolvido'), 4000))

        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        return res.json()
    } catch (error) {
        return { message: 'Error ao obter dados' }
    }
}
