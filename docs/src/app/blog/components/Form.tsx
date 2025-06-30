"use client"

import { useEffect } from "react"

export function Form() {

    // useEffect(() => {
    //     async function getData() {
    //         const repos = await fetch('http://api.github.com/users/igorfonseca05/repos', { cache: 'force-cache', next: { revalidate: 10 } })
    //         console.log(await repos.json())
    //     }

    //     getData()
    // }, [])
    // const rep = await repos.json()

    // console.log(rep)

    // const [state, action, pending] = useActionState(createUser, null)

    // console.log(state)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Create an account</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
                    >
                        {/* {!pending ? "Sign Up" : 'Aguarde...'} */}
                        entrar
                    </button>
                </form>
            </div>
        </div>
    )
}
