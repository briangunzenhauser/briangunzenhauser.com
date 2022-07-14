import Link from 'next/link'
import styles from './Nav.module.css'
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();
    return (
        <nav className={styles.mainNav}>
            <ul>
                <li>
                    <Link href="/about">
                        <a className={router.pathname == "/about" ? "curr" : ""}>About</a>
                    </Link>
                </li>

                <li>
                    <Link href="/posts">
                        <a className={router.pathname == "/posts" ? "curr" : router.pathname === "/posts/[id]" ? "curr" : ""}>Posts</a>
                    </Link>
                </li>

                <li>
                    <Link href="/contact">
                        <a className={router.pathname == "/contact" ? "curr" : ""}>Contact</a>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}