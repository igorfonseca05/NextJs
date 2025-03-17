import Link from "next/link";

import style from '@/components/style.module.css'


export default function Navbar() {
    return (
        <header className={style.navBarContainer}>
            <nav className={style.navbar}>
                <Link href={'/'}>Home</Link>
                <Link href={'/contato'}>Contato</Link>
                <Link href={'/repos'}>Repositórios</Link>
                <Link href={'/produtos'}>Produtos</Link>
            </nav>
        </header>
    );
};