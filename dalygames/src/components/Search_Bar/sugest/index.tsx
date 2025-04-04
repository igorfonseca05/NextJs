"use client"

import { GamesProps } from "@/utils/types/game";
import { useEffect, useState } from "react"

import { useGames } from "@/context/gamesContext";


interface IsOpenProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void;
}


export function SugestContainer({ isOpen, setIsOpen, game }: IsOpenProps & { game: string }) {

    const { games } = useGames()

    useEffect(() => {
        if (game === '') return

        games.map(item => {
            if (item.title.toLowerCase().startsWith(game.toLowerCase()) || item.title.toLowerCase() === game.toLowerCase()) {

            }
        })
    }, [game])

    return (
        <div className={`bg-slate-200 absolute w-full h-auto z-20 p-4 ${isOpen ? 'block' : 'hidden'}`}>

        </div>
    )
}