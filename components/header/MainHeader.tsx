"use client";
import Image from "next/image";
import styles from "./MainHeader.module.scss";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.containerWide}`}>
        <div className={styles.headerInner}>
          <a href="/" rel="noopener noreferrer">
            <Image
              src="/assets/imgs/svg_logo_inverted.svg"
              alt="My Logo"
              width={100}
              height={24}
              priority
            />
          </a>
          <ul className={styles.menu}>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
