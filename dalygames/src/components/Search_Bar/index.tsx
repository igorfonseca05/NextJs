"use client"

import { FormEvent, useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { useRouter } from 'next/navigation'


export function Search_Bar() {

    const [game, setGame] = useState('')
    const router = useRouter()

    function handleSearchInput(event: FormEvent) {
        event.preventDefault()

        router.push(`/game/search/${game}`)

    }


    return (
        <div className='w-full my-4'>
            <form onSubmit={(event) => handleSearchInput(event)}>
                <label htmlFor="" className='relative bg-slate-100  py-2 rounded-lg'>
                    <input
                        type="text"
                        className='w-full py-2 px-2 focus:outline-orange-300'
                        placeholder='Está procurando algum jogo?'
                        onChange={(e) => setGame(e.target.value)} />
                    <button className='cursor-pointer' type='submit'>
                        <MdSearch size={24} className='mx-3 absolute top-2 right-0' color='orange' />
                    </button>
                </label>
            </form>
        </div>
    )
}