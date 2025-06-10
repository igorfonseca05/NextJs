'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {

    const [isOpen, setIsOpen] = useState(true)
    const [position, setPosition] = useState(0)


    useEffect(() => {

        function hideMenu(e: Event) {
            if (window.scrollY > position) {
                setIsOpen(false)

            } else if (window.scrollY < position) {
                setIsOpen(true)
            }

            setPosition(window.scrollY)
        }

        window.addEventListener('scroll', hideMenu)

        return () => window.removeEventListener('scroll', hideMenu)

    }, [position])


    return (
        <header className={`fixed top-0 z-5 flex py-3 justify-center w-full mx-auto ${isOpen ? 'menuDown' : 'menuUp'}`}>
            <div className='flex w-[95%] lg:w-[50%] justify-between items-center bg-white shadow-md rounded-xl p-2'>
                <div className="flex items-center text-lg font-bold text-gray-800">
                    <img src="/logo-stack.svg" alt="" className="h-6 mr-2" /> {/* Substitua pelo seu logo */}
                    <span>Stack</span>
                </div>
                <nav className='fixed right-0 top-0 h-screen bg-amber-200'>
                    <ul className="flex flex-col space-x-8 text-gray-600 text-sm">
                        <li className="hover:text-gray-900 cursor-pointer">Home</li>
                        <li className="hover:text-gray-900 cursor-pointer">Browse</li>
                        <li className="hover:text-gray-900 cursor-pointer">All Tools</li>
                        {/* <li className="hover:text-gray-900 cursor-pointer">Resources</li> */}
                    </ul>
                </nav>
                <div className="flex items-center space-x-5 text-gray-600 text-sm">
                    <span className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-200">Newsletter</span>
                    {/* <div className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer"></div> Placeholder para avatar/ícone */}
                </div>
            </div>
        </header>
    )
}
