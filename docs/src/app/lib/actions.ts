"use server"

import { z } from 'zod'
import { success } from 'zod/v4'

import { db, setDoc, doc, addDoc, collection } from '../../../db/firebase'
import { serverTimestamp, updateDoc } from 'firebase/firestore'
import { redirect } from 'next/navigation'

const ValidateData = z.object({
    email: z.string().email({ message: 'Email invalido' }),
    password: z.string().min(4, { message: 'Senha inválida' })
})

type FormState = {
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
    }
    message?: string
} | undefined

export async function addData(prevState: FormState, formData: FormData) {

    const validate = ValidateData.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validate.success) return { message: 'Erro ao validar dados' }

    const docRef = collection(db, 'user')
    // const docRef = doc(db, 'user', '6zfmvBEtju3OFj7EqMkd')

    await addDoc(docRef, {
        ...validate?.data,
        createdAt: serverTimestamp()
    })

    redirect('/animation')

} 