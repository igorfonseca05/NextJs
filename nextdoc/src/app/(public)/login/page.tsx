'use client'

import { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (res.ok) {
            // redirecionar ou mostrar mensagem
            alert('Login successful')
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    )
}




























// 'use client'

// import { salvar } from "@/app/lib/actions"
// import { createPost } from "@/app/lib/serverFunctions"

// // import { create } from "@/app/lib/actions"

// import { useActionState, useEffect } from "react"

// export default function FormPost() {

//     const [state, action, pending] = useActionState(createPost, { message: '' })


//     return (
//         <div className="max-w-xl mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Criar Novo Post</h1>
//             <form className="space-y-4" action={action}>
//                 <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="title">
//                         Título
//                     </label>
//                     <input
//                         id="title"
//                         type="text"
//                         className="w-full border rounded p-2"
//                         name="title"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="content">
//                         Conteúdo
//                     </label>
//                     <textarea
//                         id="content"
//                         className="w-full border rounded p-2 h-32 resize-none"
//                         required
//                         name="content"
//                     />
//                 </div>

//                 <div className="flex gap-x-4 items-center">
//                     <button
//                         type="submit"
//                         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//                     >
//                         Publicar
//                     </button>
//                     {pending ? <p>Aguarde...</p> : <p>{state.message}</p>}
//                 </div>
//             </form>
//         </div>
//     )
// }