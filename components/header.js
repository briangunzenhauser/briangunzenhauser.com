import Link from 'next/link'
import Nav from './nav'
import styles from './Header.module.css'
import { useRouter } from "next/router";

export default function Header({ siteTitle }) {
    const router = useRouter();
    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerLogo}>
                <Link href="/" className="galaxyText">
                    {siteTitle || 'Brian Gunzenhauser'}
                </Link>
            </div>
            <Nav />
        </header>
    )
}
