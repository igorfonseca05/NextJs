
import style from '../navbar/styles.module.css'

export default function Navbar() {
    return (
        <header className={style.navContainer}>
            <nav className={style.navbar}>
                <ul className={style.linksContainer}>
                    <li className={style.navLinks}>Home</li>
                    <li className={style.navLinks}>About</li>
                    <li className={style.navLinks}>Contact</li>
                    <li className={style.login}>Login</li>
                </ul>
            </nav>
        </header>
    );
};