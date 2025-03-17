
import style from '@/app/produtos/style.module.css'
import Products from '@/components/products/Products';

import Image from 'next/image';
import { Suspense } from 'react';


export default async function page() {

    // console.log(data)

    return (
        <div className={style.container}>
            <aside className={style.lateralAside}>
                <h2>Os melhores preços estão aqui</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque voluptatum pariatur nam inventore incidunt laborum fugiat tenetur, ut, quam, unde suscipit accusamus omnis itaque maiores. Totam quaerat at quos porro?
                </p>
                <Image
                    src="https://www.agenciaeplus.com.br/wp-content/uploads/2021/12/pagina-de-produto.jpg"
                    alt='produtos'
                    width={250}
                    height={200}
                    style={{ width: '100%', height: 'auto' }}
                    priority />
            </aside>
            <section className={style.productsContainer}>
                <div className={style.titles}>
                    <h1>Bem vindo a página de produtos</h1>
                    <p>Confira abaixo produtos com os melhores preços do mercado</p>
                </div>
                <Suspense fallback={<p>Carregando produtos, aguarde!</p>}>
                    <Products />
                </Suspense>
            </section>
        </div>
    );
};