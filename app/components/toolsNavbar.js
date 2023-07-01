import Link from "next/link";
import styles from "../menu/tools/page.module.css";
function ToolsNavbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/menu/tools">Tools</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/">Home</Link>
    </div>
  );
}

export default ToolsNavbar;
