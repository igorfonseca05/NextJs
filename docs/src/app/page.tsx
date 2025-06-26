'use client'

import { addData } from "./lib/actions";
import { useActionState, useEffect, useState } from "react";


export default function Home() {
  const [response, setResponse] = useState({ message: '' })
  const [state, serverAction, pending] = useActionState(addData, response)

  return (
    <div className="pt-15">
      <h1>Home</h1>
      <main className="min-h-screen flex items-center justify-center ">
        <form action={serverAction}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
        >
          <h1 className="text-xl font-bold">Login</h1>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded p-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border border-gray-300 rounded p-2"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Login
          </button>
          {pending && (<p className="bg-orange-300">Aguarde...</p>)}
          {response.message && <p className="bg-green-300">{state.message}</p>}
        </form>
      </main>
    </div>
  );
}
