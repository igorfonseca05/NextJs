
import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>A página que você está tentando acessar não existe</h1>
            <Link href={'/'}>Voltar</Link>
        </div>
    );
};