
import clientPromise from "@/app/lib/mongodb"
import { ObjectId, WithId } from "mongodb"
import { unstable_cache } from "next/cache"

interface ParamsProps {
    params: Promise<{ id: string }>
}

interface UserProps {
    _id: ObjectId,
    name: string,
    email: string
}

async function getUserData(id: string) {
    try {
        const db = (await clientPromise).db("apiAuth")
        const user = await db.collection<UserProps>('usermodels').findOne({ _id: new ObjectId(id) })
        return user

    } catch (error: any) {
        console.log(error.message)
    }
}


export default async function User({ params }: ParamsProps) {
    const { id } = await params
    if (!id) return <p>Carregando...</p>


    const getUserCached = unstable_cache(async () => getUserData(id), [id], { tags: ['user'], revalidate: 3600 })

    const userData = await getUserCached()

    return (
        <div>
            <h1>Estou com o usuário {userData?.name}</h1>
        </div>
    )
}