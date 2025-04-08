
import { Container } from "@/components/container"
import { GamesProps } from "@/utils/types/game"

import Link from "next/link"
import Image from "next/image"

import { BsArrowRightCircle } from 'react-icons/bs'
import { Search_Bar } from "@/components/Search_Bar"


async function getGame(title: string) {
    try {

        const res = await fetch(`${process.env.NEXT_URL}/next-api/?api=game&title=${title}`)

        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default async function Search({ params }: { params: { title: string } }) {

    const title = decodeURIComponent(params.title)
    const game: GamesProps[] = await getGame(title)
    return (
        <main className="w-full text-black">
            <Container>
                <h1 className="font-bold text-xl mt-8  mb-5">Veja o que encontramos em nossa base:</h1>

                {!game && <p>Esse jogo não foi encontrado!...</p>}

                <section className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        game?.map(game => (
                            <Link key={game.id} href={`/${game.id}`} className="p-2 bg-slate-200 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg">
                                <div className="h-56 w-full relative">
                                    <Image
                                        key={game.id}
                                        src={game.image_url}
                                        alt="images game"
                                        className="object-cover rounded-lg object-top"
                                        fill={true}
                                        sizes="(max-width: 768px) 100%, 100vw"
                                    // quality={100}
                                    />
                                </div>
                                <div className="flex items-center justify-between my-2">
                                    <p className="whitespace-nowrap text-ellipsis overflow-hidden">{game.title}</p>
                                    <BsArrowRightCircle size={16} color="#000" />
                                </div>
                            </Link>
                        ))
                    }
                </section>
            </Container>
        </main>
    )
}