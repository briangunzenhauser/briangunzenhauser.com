import Link from 'next/link'
import styles from './Nav.module.css'
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();
    return (
        <nav className={styles.mainNav}>
            <ul>
                <li>
                    <Link href="/about" className={router.pathname == "/about" ? "curr" : ""}>About</Link>
                </li>

                <li>
                    <Link href="/posts" className={router.pathname == "/posts" ? "curr" : router.pathname === "/posts/[id]" ? "curr" : ""}>Posts</Link>
                </li>

                <li>
                    <Link href="/contact" className={router.pathname == "/contact" ? "curr" : ""}>Contact</Link>
                </li>

            </ul>
        </nav>
    )
}