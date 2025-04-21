
'use client'

import { salvar, getData } from "@/app/lib/actions"
import { useActionState } from "react"


export function Form() {

    const [state, action, pending] = useActionState(salvar, { message: '' })

    return (
        <div>
            <form className="mt-5 bg-amber-100 p-8" action={action}>
                <label htmlFor="nome">
                    <span>Nome:</span>
                    <input type="text" name="nome" className="bg-white mx-2" required={true} />
                </label>
                <button className="bg-fuchsia-300 px-1">Enviar</button>
                {pending ? <p>Aguarde...</p> : state.message && <p>Dado foi adicionado</p>}
            </form>

            <button className="p-2 bg-sky-200 cursor-pointer" onClick={async () => { getData() }}>Clique aqui</button>
        </div>
    )
}