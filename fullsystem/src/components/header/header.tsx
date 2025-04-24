"use client"

import { useEffect, useState } from "react"

import styles from './styles.module.scss'
import Link from "next/link"

export function Header() {

    const [scrollY, setScrollY] = useState(0)
    const [change, setChange] = useState(false)

    useEffect(() => {

        function scrolling() {
            if (window.scrollY > 0) {
                setChange(true)
            } else {
                setChange(false)

            }
        }

        window.addEventListener('scroll', scrolling)

        return () => window.removeEventListener('scroll', scrolling)

    }, [scrollY])

    return (
        <header className={`${change ? `${styles.headerContainerScroll}` : `${styles.headerContainer} `}`}>
            <div className={styles.contentLogo}>
                <Link href={'/#home'}> Dev Motors</Link>
            </div>
            <nav className={styles.navContainer}>
                <Link href={'/#home'}>Home</Link>
                <Link href={'/#servicos'}> Serviços</Link>
                <Link href={'/#contatos'}>Contatos</Link>
            </nav>
        </header>
    )
}