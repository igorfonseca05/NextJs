import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";



export default function Home() {

  // string methods

  const test = 'cadeira'

  // console.log(test.charAt(test.length - 1))
  // console.log(test.concat("-", 'Minha', '-'))
  // console.log(test.includes('x'))
  // console.log(test.indexOf('c'))
  // console.log(test.lastIndexOf('a'))

  const nome: string = 'igor'
  const altura: number = 185
  const isWhite: boolean = true

  const nomes: string[] = ['Caio', 'Pedro']
  const idades: number[] = [1, 2, 3]

  // Tipando objetos
  const user: { name: string, email: string } = {
    name: 'igor',
    email: 'igorfonseca@gmail.com'
  }

  type Produtos = {
    nome: string,
    price: number
  }

  interface Produto {
    nome: string,
    price: number
  }

  const produto: Produto = {
    nome: "Cadeira",
    price: 15
  }

  // Tipando array de objetos

  interface Products {
    name: string,
    price: number
  }

  const estoque: Products[] = [
    { name: 'Caderno', price: 3 },
    { name: 'Mesa', price: 10 }
  ]

  function sum(num1: number, num2: number): number {
    return num1 + num2
  }



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
