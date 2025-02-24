import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";



export default function Home() {

  // string methods

  const test = 'cadeira'

  // console.log(test.charAt(test.length - 1))
  // console.log(test.concat("-", 'Minha', '-'))
  // console.log(test.includes('x'))
  // console.log(test.indexOf('c'))
  // console.log(test.lastIndexOf('a'))



  return (
    <>
      <section>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Mundo dos games</h1>
          <p className={styles.subTitle}>Tudo sobre o universo dos games em um só lugar!</p>
        </div>
      </section>
    </>
  );
}
