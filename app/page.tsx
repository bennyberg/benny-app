import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main id={styles["homepage"]}>
          <div className={styles["logo-section"]}>
          <Image
            src="/huji.svg"
            alt="HUJI Logo"
            width="80"
            height="80"
            priority
          />
          <Image
            src="/bezalel.svg"
            alt="Bezalel Logo"
            className="item"
            width="80"
            height="80"
            priority
          />
        </div>

      <div>
        <h2>Welcome to my homepage</h2>
        <p>Check out my projects!</p>
        <div>
          <h2>Links</h2>
          <div className={styles["link-section"]}>
            <Link href={"/tic-tac-toe"} className={styles["link-button"]}>Tic-Tac-Toe</Link>
            <Link href={"/art"} className={styles["link-button"]}>Met Museum of Art</Link>
            <Link href={"/design"} className={styles["link-button"]}>Design to Code</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
