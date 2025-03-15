
import Link from "next/link";

import style from '@/app/contatos/style.module.css'

export default function page() {

    return (
        <div>
            <Link href={'/'}>Voltar a página inicial</Link>
            <h1 className={style.contactTitle}>Pagina de contatos</h1>
            <p>Essa é a minha página de contatos</p>
        </div>
    );
};