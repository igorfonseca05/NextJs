'use server'

import { teste } from "./definitions";

export async function createUser(state: any, formData: FormData) {

    await new Promise(resolve => setTimeout(() => resolve('resolvida'), 3000))

    const validate = teste.safeParse({
        name: formData.get('name')
    })

    if (!validate) {
        console.log(validate)
    }

    // const email = formData.get('email')
    // const password = formData.get('password')



    // console.log(name, email, password)


    return { message: 'Usuário criado com sucesso' }
}