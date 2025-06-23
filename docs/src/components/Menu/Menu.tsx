'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // ícones (instale com: `npm install lucide-react`)

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const routes = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contato' },
    { name: 'animation', href: '/animation' }
];

export default function MenuComponent() {
    const [open, setOpen] = useState(false);

    gsap.registerEffect(ScrollTrigger)

    useEffect(() => {

        const navtween = gsap.timeline({
            scrollTrigger: {
                trigger: "header",
                start: 'bottom top'
            }
        })

        navtween.fromTo('header', {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10)',
            duration: 1,
            ease: 'power1.inOut'

        })


    }, [])

    return (
        <header id='nav' className="w-full bg-white shadow-md fixed top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">MeuSite</h1>

                {/* Menu Desktop */}
                <nav className="hidden md:flex gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {route.name}
                        </Link>
                    ))}
                </nav>

                {/* Botão Mobile */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {open && (
                <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-gray-700 hover:text-blue-600"
                        >
                            {route.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
