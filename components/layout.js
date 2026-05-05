import Header from './header'
import Footer from './footer'
import styles from './Main.module.css'

export default function Layout({ children, siteTitle }) {
    return (
        <>
            <Header siteTitle={siteTitle} />
            <main className={styles.siteMain}>{children}</main>
            <Footer siteTitle={siteTitle} />
        </>
    )
}
