import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";



export default function Home() {

  // Tipagem de variaveis primitivas
  const nome: string = 'igor'
  const altura: number = 185
  const isWhite: boolean = true

  // Tipagem de arrays
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


  // Execicio 1
  const name: string = 'Caio'
  const idade: number = 23
  const ativo: boolean = true

  // Exercicio 2
  const mega: number[] = [12, 5, 17, 36, 56, 72]

  // Exercicio 3

  type Car = {
    marca: string,
    ano: number
  }

  const carro: Car = {
    marca: 'Ford',
    ano: 1995
  }

  // Exercicio 4

  type Pessoa = {
    nome: string,
    idade: number,
    email: string
  }

  const person: Pessoa = {
    nome: 'Carlos',
    idade: 37,
    email: 'Carlos@gamail.com'
  }

  // Exercicio 5 

  function dobrar(a: number): number {
    return a * 2
  }

  // Exercicio 6

  type Product = {
    name: string,
    preco: number
  }

  function criarProduto(name: string, preco: number): Product {
    return {
      name,
      preco
    }
  }

  // Exercicio 7 

  const users: { nome: string, idade: number, email: string }[] = [{
    nome: 'Andre',
    idade: 56,
    email: 'Andre@gmail.com'
  }]

  //  Exercicio 8

  async function buscarDados(): Promise<{ id: number, nome: string }> {
    return {
      id: 2,
      nome: 'Igor'
    }
  }

  // Exercicio 9

  const [contador, setContador] = useState<number>(0)

  // Exercicio 9

  type Pedido = {
    id: number,
    produto: string,
    observacao?: string
  }

  const meuPedido: Pedido = {
    id: 2,
    produto: 'Caderno',
    observacao: 'Esse produto é novo no país'
  }



  type Person = {
    name: string,
    idade?: number
  }

  const pessoa: Person = {
    name: 'Ricardo',
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
