import { useSession, signIn, signOut } from 'next-auth/react'

import Link from 'next/link';


import styles from './styles.module.css'
import { useEffect, useState } from 'react';

export default function Header() {

  const [userName, setUserName] = useState<string | undefined>()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      const userName = session?.user?.name
      setUserName(userName?.split(' ')[0])
    }
  }, [])


  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href={'/'}>
            <h1 className={styles.logo}>Tarefa <span>+</span></h1>
          </Link>
          <Link href={'/dashboard'} className={styles.link}>
            Meu Painel
          </Link>
        </nav>
        {status === 'loading' ? (
          <></>
        ) : session ? (
          <div className={styles.greatingContainer}>
            <p className={styles.greatingUser}>Olá {userName} </p>
            <button className={styles.loginButton} onClick={() => signOut()}>Sair</button>
          </div>

        ) : (
          <button className={styles.loginButton} onClick={() => signIn('google')}>Acessar</button>
        )}
      </section>
    </header>
  );
};