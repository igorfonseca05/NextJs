
import { Container } from "@/components/container"
import { GamesProps } from "@/utils/types/game"
import { redirect } from "next/navigation"

import Image from "next/image"
import { Metadata } from "next"


interface PropsParams {
    params: {
        id: string
    }
}


export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
    try {

        const response: GamesProps = await fetch(`${process.env.NEXT_URL}/next-api/?api=game&id=${params.id}`)
            .then(res => res.json())
            .catch((error) => { return { title: 'Dalygames - Sua plataforma de games online' } })

        return {
            title: response.title,
            keywords: response.categories,
            openGraph: {
                title: response.title,
                images: [`${response.image_url}`]
            },
            robots: {
                index: true,
                nocache: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }
        }

    } catch (error) {
        return { title: 'Dalygames - Sua plataforma de games online' }
    }
}


function getRandomNumber(min: number, max: number, id: string): number {
    let num = Math.floor(Math.random() * (max - min + 1) + min)

    if (num === Number(id)) {
        num = Math.floor(Math.random() * (max - min + 1) + min)
    }

    return num
}

async function getGames(id: string, randomId: string): Promise<GamesProps[]> {

    let games: GamesProps[] = []

    const urls = [
        `${process.env.NEXT_URL}/next-api/?api=game&id=${id}`,
        `${process.env.NEXT_URL}/next-api/?api=game&id=${randomId}`,
    ]

    const results = await Promise.allSettled(urls.map((url) => fetch(url, { cache: 'no-store' }).then(res => res.json())))

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

    const results: GamesProps[] = await getGames(id, getRandomNumber(1, 16, id).toString())
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

                    <h2 className="font-bold text-lg my-4">Plataformas</h2>
                    <div className="flex gap-2 flex-wrap">
                        {game?.platforms.map((plataform, index) => (
                            <span key={index} className="min-w-20 bg-slate-100 px-2 rounded-md grow sm:grow-0 text-center">{plataform}</span>
                        ))}
                    </div>

                    <h2 className="font-bold text-lg my-4">Categorias</h2>
                    <div className="flex gap-2 flex-wrap">
                        {game?.categories.map((category, index) => (
                            <span key={index} className=" min-w-20 bg-slate-100 px-2 rounded-md grow sm:grow-0 text-center">{category}</span>
                        ))}
                    </div>

                    <h2 className="font-bold text-lg my-4">Lançamento: <span className="font-normal text-sm">{game.release}</span></h2>

                    <h2 className="font-bold text-lg mt-8">Outros jogos recomendados:</h2>
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