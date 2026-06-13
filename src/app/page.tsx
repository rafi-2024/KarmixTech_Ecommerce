import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="page-title">
        <p className={styles.eyebrow}>Task 1.1 complete</p>
        <h1 id="page-title">The Next.js foundation is ready.</h1>
        <p>
          This first page is deliberately small. We will add the design system,
          navigation, hero, catalog, and PostgreSQL one focused task at a time.
        </p>
        <dl className={styles.details}>
          <div>
            <dt>Framework</dt>
            <dd>Next.js App Router</dd>
          </div>
          <div>
            <dt>Language</dt>
            <dd>TypeScript</dd>
          </div>
          <div>
            <dt>Next lesson</dt>
            <dd>Responsive design foundation</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
