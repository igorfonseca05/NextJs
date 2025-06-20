"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"


export async function createUser(prevState: any, formData: FormData) {

    const cookie = await cookies()

    const name = formData.get('name')

    console.log(name)


    // await new Promise((res) => setTimeout(res, 1000))
    redirect('/')
    // return { message: `O nome cadastrado foi ${name}` }
}