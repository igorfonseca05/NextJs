import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/contato'}>Contato</Link>
            </nav>
        </header>
    );
};