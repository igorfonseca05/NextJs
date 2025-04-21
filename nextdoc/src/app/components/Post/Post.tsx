
import { use } from "react"

interface GitProps {
    avatar_url: string
    name: string
    bio: string
    blog: string
    location: string
    public_repos: number
    html_url: string
}

export function Post({ infos }: { infos: Promise<GitProps> }) {

    const dados = use(infos)

    return (
        <div className="mt-10 bg-gray-100">
            <p>{dados.bio}</p>
        </div>
    )
}