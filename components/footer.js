import styles from "./Footer.module.css";

export default function Footer({ siteTitle }) {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.siteFooter}>
      <div>
        <p>&copy; {year} {siteTitle || 'Brian Gunzenhauser'}</p>
      </div>
    </footer>
  );
}
