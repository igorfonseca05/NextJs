
import clientPromise from "@/app/lib/mongodb"
import { ObjectId } from "mongodb"


async function getUserData(id: string) {

    try {
        const db = (await clientPromise).db("apiAuth")

        if (!ObjectId.isValid(id)) {
            return 'Insira um ID válido'
        }

        const user = await db.collection('usermodels').findOne({ _id: new ObjectId(id) })
        return user

    } catch (error: any) {
        console.log(error.message)
    }
}

interface ParamsProps {
    params: {
        id: string
    }
}

export default async function User({ params }: ParamsProps) {
    const param = await params

    if (!param.id) return <p>Carregando...</p>

    const user = await getUserData(param.id)

    return (
        <div>
            <h1>Estou com o usuário {user?.name}</h1>
        </div>
    )
}