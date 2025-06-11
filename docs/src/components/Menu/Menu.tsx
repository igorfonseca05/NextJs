'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ícones (instale com: `npm install lucide-react`)

const routes = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contato' }
];

export default function MenuComponent() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md fixed top-0 z-50">
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
