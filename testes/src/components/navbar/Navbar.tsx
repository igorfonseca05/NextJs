
import { useEffect, useState } from 'react';
import style from '../navbar/styles.module.css'

import { signIn, useSession, signOut } from 'next-auth/react';

export default function Navbar() {

    const { data: session, status } = useSession()

    const [name, setName] = useState<string | undefined>('')

    useEffect(() => {
        if (session) {
            const userName = session?.user?.name
            setName(userName?.split(' ')[0])
        }

    }, [status])

    return (
        <header className={style.navContainer}>
            <nav className={style.navbar}>
                <ul className={style.linksContainer}>
                    <li className={style.navLinks}>Home</li>
                    <li className={style.navLinks}>About</li>
                    <li className={style.navLinks}>Contact</li>

                    {status === 'loading' ? (
                        <></>
                    ) : session?.user ?
                        (<>
                            {/* <p className={style.greating}> {session?.user?.name}</p> */}
                            <button className={style.login} onClick={() => signOut()}> Olá {name}</button>
                        </>) : (<>
                            <button className={style.login} onClick={() => signIn('google')}>Login</button>
                        </>)
                    }
                </ul>
            </nav>
        </header>
    );
};