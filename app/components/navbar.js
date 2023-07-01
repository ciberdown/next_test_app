import Link from "next/link";
import styles from "../menu/styles.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link draggable={false} href="/">
        Home
      </Link>
      <Link draggable={false} href="/menu/contactUs">
        Contact Us
      </Link>
      <Link draggable={false} href="/menu/about">
        About
      </Link>
      <Link className={styles.tools} href="/menu/tools">
        Tools
      </Link>
      <Link className={styles.menu} draggable={false} href="/menu">
        Menu
      </Link>
      <Link draggable={false} href="/menu/profile">
        Profile
      </Link>
      <Link draggable={false} href="/menu/comments">
        Comments
      </Link>
      <Link draggable={false} href="/menu/users">
        Users
      </Link>
    </div>
  );
}

export default Navbar;
