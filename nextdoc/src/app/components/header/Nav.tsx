'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

export function Header() {

    const [isOpen, setIsOpen] = useState(true)
    const [position, setPosition] = useState(0)

    const menuItems = [
        { id: 1, label: "Home", href: '/' },
        { id: 2, label: "Browse", href: '/browser' },
        { id: 3, label: "All Tools", href: '/allTools' },
    ]


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
            <div className='flex w-[95%] md:w-[50%] justify-between items-center bg-white shadow-md rounded-xl p-2 animate'>
                <div className="flex items-center text-lg font-bold text-gray-800">
                    <img src="/logo-stack.svg" alt="" className="h-6 mr-2" /> {/* Substitua pelo seu logo */}
                    <span>Stack</span>
                </div>
                {/* <span className='button block sm:hidden'>
                    <Menu size={20} />
                </span> */}
                <div className='grow w-full justify-between items-center flex'>
                    <nav className='m-auto'>
                        <ul className="flex space-x-8 text-gray-600 text-sm">
                            {menuItems.map(link => (
                                <Link key={link.id} href={link.href} className="hover:text-gray-900 cursor-pointer">{link.label}</Link>
                            ))}
                            {/* <li className="hover:text-gray-900 cursor-pointer">Resources</li> */}
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-5 text-gray-600 text-sm">
                        <span className="button">Login</span>
                        {/* <div className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer"></div> Placeholder para avatar/ícone */}
                    </div>
                </div>
            </div>
        </header>
    )
}
