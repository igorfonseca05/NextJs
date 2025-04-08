
import { Container } from "@/components/container"
import { GamesProps } from "@/utils/types/game"
import { redirect } from "next/navigation"

import Image from "next/image"


async function getGame(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_URL}/next-api/?api=game&id=${id}`)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

function getRandomNumber(min: number, max: number): number {
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    return num
}

async function getGames(id: string, randomId: string): Promise<GamesProps[]> {

    let games: GamesProps[] = []

    const urls = [
        `${process.env.NEXT_URL}/next-api/?api=game&id=${id}`,
        `${process.env.NEXT_URL}/next-api/?api=game&id=${randomId}`,
    ]

    const results = await Promise.allSettled(urls.map((url) => fetch(url).then(res => res.json())))

    // console.log(results)

    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            games.push(result.value)
        } else {
            console.log('Falhou', result.reason)
        }
    })

    return games
}


export default async function Game({ params: { id } }: { params: { id: string } }) {

    // const game: GamesProps = await getGame(id)

    // const randomGame = await getGame(getRandomNumber(1, 16).toString())

    const results: GamesProps[] = await getGames(id, getRandomNumber(1, 16).toString())
    const [game, randomGame] = results

    if (!game || !randomGame) {
        redirect('/')
    }

    return (
        <main>
            <Container>

                <section className="w-full">
                    <div className="max-h-80 h-80 sm:h-96 relative mt-2">
                        <Image
                            src={game.image_url}
                            alt="capa do jogo"
                            fill={true}
                            quality={100}
                            className="max-h-70 object-cover object-top rounded-lg"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                    <h1 className="font-bold text-black mt-2 text-lg">{game.title}</h1>
                    <p className="py-2">{game.description}</p>
                    <h2 className="font-bold text-lg my-4">Categorias</h2>
                    <div className="flex gap-1">
                        {game?.categories.map((category, index) => (
                            <span key={index} className="bg-slate-100 px-2 rounded-md">{category}</span>
                        ))}
                    </div>
                    <h2 className="font-bold text-lg my-4">Lançamento: <span className="font-normal text-sm">{game.release}</span></h2>
                    <h2 className="font-bold text-lg my-4">Outros jogos recomendados:</h2>
                    <div className="max-h-80 h-80 sm:h-96 relative mt-2">
                        <Image
                            src={randomGame.image_url}
                            alt="capa do jogo"
                            fill={true}
                            quality={100}
                            className="max-h-50 object-cover object-top rounded-lg"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </section>

            </Container>
        </main>
    )
}