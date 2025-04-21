
'use client'

import { salvar } from "@/app/lib/actions"

export function Form() {
    return (
        <form className="mt-5 bg-amber-100 p-8" action={salvar}>
            <label htmlFor="nome">
                <span>Nome:</span>
                <input type="text" name="nome" className="bg-white mx-2" />
            </label>
            <button type="submit" className="bg-fuchsia-300 px-1">Enviar</button>
        </form>
    )
}