'use server'

import { userDataSchema } from "./definitions";
import { hash } from 'argon2'
import clientPromise from "./mongodb";
import { redirect } from "next/navigation";

interface FormInterface {
    name?: string[],
    email?: string[],
    password?: string[]
}

interface FormState {
    error?: FormInterface
    message?: string
}


export async function createUser(state: FormState | undefined, formData: FormData) {

    // Validando dados
    const validate = userDataSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    // Verificando resultado da validação
    if (!validate.success) {
        console.log({ error: validate.error.flatten().fieldErrors })
        return { error: validate.error.flatten().fieldErrors }
    }

    // Obtendo dados inseridos no formulário
    const { name, email, password } = validate.data

    // Faz hash da senha
    const hashedPassword = await hash(password)

    // Conectando a base de dados
    const db = (await clientPromise).db('user2')

    // Verificando se usuário já possui cadastro 
    const isUser = await db.collection('users').findOne({ email })
    if (isUser) {
        return { message: 'Email já cadastrado na base de dados' }
    }

    // Adicionando usuário a base de dados
    const user = await db.collection('users').insertOne({ name, email, hashedPassword })

    redirect('/login')

    return { message: 'Usuário criado com sucesso' }
}