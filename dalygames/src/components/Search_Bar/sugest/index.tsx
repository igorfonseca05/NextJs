"use client"

import { GamesProps } from "@/utils/types/game";
import { useEffect, useState } from "react"
import Image from "next/image";

import Link from "next/link";

import { useGames } from "@/context/gamesContext";


interface IsOpenProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void;
}

// interface SelectedGamesProps {
//     id: number,
//     title: string,
//     description: string,
//     image_url: string,
//     platforms: string[],
//     categories: string[],
//     release: string
// }

export function SugestContainer({ isOpen, setIsOpen, game }: IsOpenProps & { game: string }) {

    const { games } = useGames()

    const [allGames, setAllGames] = useState<GamesProps[]>([])


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (game === '') return
            const dados = games.filter(item => item.title.toLowerCase().startsWith(game.toLowerCase()))
            setAllGames(dados)
        }, 300)

        return () => clearTimeout(timeout)
    }, [game, games])


    return (
        <div className={`bg-gray-300 absolute w-full h-auto z-20 p-4 rounded-md aria-live="polite" ${isOpen ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-3 gap-2">
                {
                    allGames.length ? (
                        allGames.map(item => (
                            <Link key={item.id} href={`/games/${item.id}`}>
                                <div className="relative flex items-center bg-gray-500 p-2 w-full h-20 rounded-md">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image src={item.image_url} alt={item.title} layout="fill" objectFit="cover" className="rounded-md" />
                                    </div>
                                    <span className="ml-2 text-white">{item.title}</span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>Jogo não encontrado</p>
                    )
                }
            </div>
        </div>
    )
}