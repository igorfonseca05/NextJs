"use client"

import { createContext, useContext, useState } from "react"
import { GamesProps } from "@/utils/types/game"


interface AllGamesProps {
    games: GamesProps[]
}

export const GamesContext = createContext<AllGamesProps | null>(null)


export function GamesProvider({ children, games }: { children: React.ReactNode, games: GamesProps[] }) {

    return (
        <GamesContext.Provider value={{ games }}>
            {children}
        </GamesContext.Provider>
    )
}


export const useGames = () => {
    const context = useContext(GamesContext);
    if (!context) {
        throw new Error("useGame deve ser usado dentro de GameProvider");
    }
    return context
}
