import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

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
        <h2 className={styles["subheader"]}>Welcome to my homepage</h2>
        <p className={styles["main-paragraph"]}>Check out my projects!</p>
        <div>
          <h2 className={styles["subheader"]}>Links</h2>
          <div className={styles["link-section"]}>
            <div className={styles["link-container"]}>
              <Link href={"/tic-tac-toe"} className={styles["link-button"]}>
                Tic-Tac-Toe
              </Link>
              <Link href={"/art"} className={styles["link-button"]}>
                Met Museum of Art
              </Link>
              <Link href={"/design"} className={styles["link-button"]}>
                Design to Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
