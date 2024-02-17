import Image from "next/image";
import styles from "./MainHeader.module.scss";

export default function MainHeader() {
  return (
    <header>
      <a href="/" rel="noopener noreferrer">
        <Image
          src="/assets/imgs/svg_logo.svg"
          alt="My Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
      <ul>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </header>
  );
}
