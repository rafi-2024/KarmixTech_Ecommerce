import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div>
          <Link className={styles.brand} href="/">
            KarmixTech Ecommerce
          </Link>
          <p className={styles.description}>
            A practical ecommerce project built one understandable step at a
            time.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#principles">Foundation</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
