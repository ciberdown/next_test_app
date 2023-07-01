import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.par}>hello, world</p>
    <Link className={styles.menu} href='/menu' >Menu</Link>
    </main>
  );
}
