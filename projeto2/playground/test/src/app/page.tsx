import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Página home</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laudantium aliquid ratione deserunt quae iste. Tempora consequuntur accusantium harum at, atque corporis commodi architecto quaerat repellat minima maiores optio accusamus.</p>
    </div>
  );
}
