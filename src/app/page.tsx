import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={`container ${styles.layout}`}>
        <section className={styles.hero} aria-labelledby="page-title">
          <p className={styles.status}>Task 1.3 complete</p>
          <h1 id="page-title">A responsive foundation for every next step.</h1>
          <p className={styles.intro}>
            The project now has shared color, type, spacing, container, button,
            and focus rules. Future pages can grow from a consistent,
            accessible base instead of rebuilding these decisions.
          </p>
          <div className={styles.actions}>
            <a className="button buttonPrimary" href="#principles">
              Explore the foundation
            </a>
            <a className="button buttonSecondary" href="#project-details">
              View project details
            </a>
          </div>
          <dl className={styles.details} id="project-details">
            <div>
              <dt>Framework</dt>
              <dd>Next.js App Router</dd>
            </div>
            <div>
              <dt>Styling</dt>
              <dd>Global tokens and CSS Modules</dd>
            </div>
            <div>
              <dt>Next lesson</dt>
              <dd>Responsive site shell</dd>
            </div>
          </dl>
        </section>

        <section
          className={styles.panel}
          id="principles"
          aria-labelledby="principles-title"
        >
          <h2 id="principles-title">Foundation principles</h2>
          <div className={styles.principles}>
            <article className={styles.principle}>
              <h3>Mobile first</h3>
              <p>
                Layouts begin as a readable single column and expand only when
                the available width supports it.
              </p>
            </article>
            <article className={styles.principle}>
              <h3>Accessible by default</h3>
              <p>
                Strong contrast, visible keyboard focus, practical targets, and
                reduced-motion support are built in.
              </p>
            </article>
            <article className={styles.principle}>
              <h3>Reusable decisions</h3>
              <p>
                Shared tokens keep spacing, typography, color, and controls
                consistent as the storefront grows.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
