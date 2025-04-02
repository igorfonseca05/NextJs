"use client"

import { useState } from 'react'
import { MdSearch } from 'react-icons/md'

import { GamesProps } from '@/utils/types/game'


export function Search_Bar() {

    const [game, setGame] = useState('')

    function handleSearchInput(e: SubmitEvent) {
        e.preventDefault()


    }


    return (
        <div className='w-full my-4'>
            <form onSubmit={(e) => handleSearchInput}>
                <label htmlFor="" className='relative bg-slate-100  py-2'>
                    <input
                        type="text"
                        className='w-full py-2 px-2 focus:outline-orange-300'
                        placeholder='Está procurando algum jogo?'
                        onChange={(e) => setGame(e.target.value)} />
                    <button className='cursor-pointer'>
                        <MdSearch size={24} className='mx-3 absolute top-2 right-0' color='orange' />
                    </button>
                </label>
            </form>
        </div>
    )
}