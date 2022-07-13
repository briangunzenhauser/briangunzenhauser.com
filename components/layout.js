import Header from './header'
import Footer from './footer'
import styles from './Main.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className={styles.siteMain}>{children}</main>
            <Footer />
        </>
    )
}