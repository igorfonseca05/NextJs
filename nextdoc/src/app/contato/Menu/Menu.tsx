'use client'

import { ReactNode, useState } from "react"

export function Menu({ children }: { children: ReactNode }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`w-63 h-screen ${isOpen ? 'bg-red-300' : 'bg-sky-300'}`}>
            <button className="bg-amber-300 p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>close</button>
            <p>{isOpen ? "Aberto" : "Fechado"}</p>
            {children}
        </div>
    )
}