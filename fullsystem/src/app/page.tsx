import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* <h1>Teste</h1> */}
      <section style={{ height: '100vh', width: '100vw', backgroundColor: 'blue' }}></section>
      <section style={{ height: '100vh', width: '100vw', backgroundColor: 'yellow' }}></section>
      <section style={{ height: '100vh', width: '100vw', backgroundColor: 'red' }}></section>
    </main>
  );
}
