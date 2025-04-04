"use client"

import { useState } from "react"

interface IsOpenProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void;
}

export function SugestContainer({ isOpen, setIsOpen }: IsOpenProps) {

    return (
        <div className={`bg-slate-200 absolute w-full h-auto z-20 p-4 ${isOpen ? 'block' : 'hidden'}`}>
            <h3>Não há jogos disponiveis</h3>
        </div>
    )
}