import Image from "next/image";
import styles from "./MainFooter.module.scss";

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>
            <a href="/work">tomandlim@gmail.com</a>
          </li>
        </ul>
        <ul>
          <li>Seoul, South Korea</li>
        </ul>
        <ul>
          <li>Copyright, Tom Lim. All rights reserved.</li>
        </ul>
      </div>
    </footer>
  );
}
