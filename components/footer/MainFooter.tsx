import Image from "next/image";
import styles from "./MainFooter.module.scss";

export default function MainFooter() {
  return (
    <footer>
      <ul>
        <li>
          <a href="/work">tomandlim@gmail.com</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/about">Seoul, South Korea</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/about">Copyright, Tom Lim. All rights reserved.</a>
        </li>
      </ul>
    </footer>
  );
}
