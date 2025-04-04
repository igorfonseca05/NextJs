"use client"

import { GamesProps } from "@/utils/types/game";
import { useState } from "react"

interface IsOpenProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void;
    // allGames: GamesProps[]
}


export function SugestContainer({ isOpen, setIsOpen }: IsOpenProps) {

    // console.log(allGames)

    return (
        <div className={`bg-slate-200 absolute w-full h-auto z-20 p-4 ${isOpen ? 'block' : 'hidden'}`}>
            <h3>Não há jogos disponiveis</h3>
        </div>
    )
}