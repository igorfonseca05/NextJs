
import Link from 'next/link'
import Image from 'next/image'

import style from '@/components/header/style.module.css'

import { MdSportsEsports } from 'react-icons/md'


import logo from '../../../public/logo.svg'

export function Navbar() {

    return (
        <header className='w-full h-28 bg-slate-100 text-black px-2'>
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className='flex justify-center items-center gap-4'>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            alt='logo application'
                            quality={100}
                            priority={true}
                            className='w-full'
                        />
                    </Link>
                    <Link href={'/games'}>
                        Games
                    </Link>
                    <Link href={'/profile'}>
                        Profile
                    </Link>
                </nav>
                <div className='hidden sm:flex'>
                    <Link href={'/profile'}>
                        <MdSportsEsports size={34} color='#475569' />
                    </Link>
                </div>
            </div>
        </header>
    )
}