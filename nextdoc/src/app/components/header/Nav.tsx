'use client'

import Link from 'next/link'

export function Header() {
    return (
        <header className="w-full bg-orange-500 text-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight">
                    Marmita Delivery 🍱
                </Link>

                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/about" className="hover:text-gray-100 transition">Sobre</Link>
                    <Link href="/cardapio" className="hover:text-gray-100 transition">Cardápio</Link>
                    <Link href="/contato" className="hover:text-gray-100 transition">Contato</Link>
                    <Link href="/login" className="bg-white text-orange-500 font-semibold px-4 py-1 rounded hover:bg-orange-100 transition">
                        Entrar
                    </Link>
                </nav>
            </div>
        </header>
    )
}
