
import style from '@/app/produtos/style.module.css'


import Image from 'next/image';

export default function page() {
    return (
        <div className={style.container}>
            <aside className={style.lateralAside}>
                <h2>Os melhores preços estão aqui</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptatum pariatur nam inventore incidunt laborum fugiat tenetur, ut, quam, unde suscipit accusamus omnis itaque maiores. Totam quaerat at quos porro?
                    Libero architecto dolorum voluptatum optio expedita mollitia laborum molestias a? Eveniet enim nemo maxime adipisci voluptas voluptate iure cum dolores? Quibusdam architecto sit quia soluta eius consequatur ex ut. Dicta.
                </p>
                <Image
                    src="https://www.agenciaeplus.com.br/wp-content/uploads/2021/12/pagina-de-produto.jpg"
                    alt='produtos'
                    fill
                    // width={250}
                    // height={200}
                    // style={{ objectFit: 'cover' }}
                    priority />
            </aside>
            <main>
                <h1>Bem vindo a página de produtos</h1>
                <p>Confira abaixo produtos com os melhores preços do mercado</p>
            </main>
        </div>
    );
};