import clientPromise from "@/app/lib/mongodb";

import { Params } from "next/dist/server/request/params";
import Link from "next/link";

// async function getData() {
//     const data = await fetch('http://localhost:3000/api/data')
//     return data.json()
// }


async function getUser() {
    try {
        const db = (await clientPromise).db("apiAuth")
        const users = await db.collection('usermodels').find().toArray()

        return users
    } catch (error: any) {
        console.log(error.message)
    }
}


export default async function Cardapio() {
    // const res: { data: string } = await getData()
    const users = await getUser()

    return (
        <div className="flex flex-col">
            <h1 className=" mt-20">Acesse a conta dos usuários abaixo</h1>
            {users?.map((user) => (
                <button key={user._id.toString()} className="bg-sky-300 p-3 w-fit rounded-lg m-1">
                    <Link href={`/cardapio/${user._id}`}>{user.name}</Link>
                </button>
            ))}
        </div>
    )
}