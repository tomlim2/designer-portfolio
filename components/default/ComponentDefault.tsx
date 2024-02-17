import Image from "next/image";
import styles from "./homeHeader.module.css";

export default function header() {
  return (
    <header>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/imgs/svg_logo.svg"
          alt="My Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
    </header>
  );
}
