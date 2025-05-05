'use client'

import { InfosProps } from "@/utils/types"

import { use } from "react"

interface DataProps {
    data: Promise<InfosProps[]>
}


export function Repo_List({ data }: DataProps) {

    const repos: InfosProps[] = use(data)

    return (
        <ul>
            {repos.map((rep, i) => (
                <li key={rep.id}>{rep.title}</li>
            ))}
        </ul>
    )
}