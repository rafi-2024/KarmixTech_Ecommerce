"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./site-header.module.css";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/#principles", label: "Foundation" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link className={styles.brand} href="/" onClick={closeMenu}>
          <span className={styles.brandMark} aria-hidden="true">
            K
          </span>
          <span>Karmech-Commerce</span>
        </Link>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className={styles.menuButtonText}>
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
