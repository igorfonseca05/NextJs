'use client'

import { use } from 'react'

interface GitProps {
    avatar_url: string
    name: string
    bio: string
    blog: string
    location: string
    public_repos: number
    html_url: string
}

export function Post({ repos }: { repos: Promise<GitProps[]> }) {
    // await new Promise(resolve => setTimeout(() => { resolve('oi') }, 3000))
    const dados = use(repos)

    return (
        <div className="mt-10 bg-gray-100">
            {dados.map((item, id) => (
                <p key={id}>{item.name}</p>
            ))}
        </div>
    )
}