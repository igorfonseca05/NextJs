
import Image from "next/image";

import style from '@/components/products/style.module.css'

// Components
import BuyButton from '@/components/buyButton/BuyButton';

interface Products {
    id: number,
    name: string,
    price: number,
    category: string,
    stock: number
}


async function getProducts() {
    // await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch('http://localhost:4000/products')
    return res.json()
}


export default async function Products() {
    const data: Products[] = await getProducts()

    return (
        <main className={style.prodCont}>
            {data.map(item => (
                <div className={style.cardProducts} key={item.id}>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png' alt='image placeholder'
                        width={150}
                        height={200}
                        style={{ width: '100%', height: 'auto' }} />
                    <div className={style.productsInfo}>
                        <h3>{item.name}</h3>
                        <p>R$ {item.price}</p>
                        <BuyButton />
                    </div>
                </div>
            ))}
        </main>
    );
};