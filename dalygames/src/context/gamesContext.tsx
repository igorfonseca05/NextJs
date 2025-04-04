"use client"

import { createContext, useContext, useState } from "react"


import { GamesProps } from "@/utils/types/game"

interface AllProps {
    games: {
        games: GamesProps[]
    }
    children: React.ReactNode
}

export const GamesContext = createContext<AllProps | null>(null)

export function GamesProvider({ children, games }: AllProps) {

    const [allGames, setAllGames] = useState('')

    return (
        <GamesContext.Provider value={{ games }}>
            {children}
        </GamesContext.Provider>
    )
}

export const useGames = () => useContext(GamesContext) 
