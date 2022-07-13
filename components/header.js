import Link from 'next/link'
import Nav from './nav'
import styles from './Header.module.css'
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerLogo}>
                <Link href="/">
                    <a className={router.pathname == "/" ? "homeCurr" : ""}>Brian <span>Gunzenhauser</span></a>
                </Link>
            </div>

            <Nav />
        </header>
    )
}