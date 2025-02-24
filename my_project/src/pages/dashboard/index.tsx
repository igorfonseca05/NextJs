import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import styles from './styles.module.css'

// Components
import Header from '@/src/components/Header/Header'
import Head from 'next/head'
import Textarea from "@/src/components/Textarea";

// Icons
import { FiShare2 } from 'react-icons/fi'
// import { FaTrash } from 'react-icons/fa'
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Firebase
import { db, addDoc, collection, getDocs, onSnapshot, doc } from '../../firebase/firebaseConnection'
import Tasks from "@/src/components/tasks/Tasks";


export default function Dashboard() {

    const [input, setInput] = useState("")
    const [publicTask, setPublicTask] = useState(false)
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        async function getTaks() {

            const task = onSnapshot(doc(db, 'userTasks', 'task'), (doc) => {
                console.log(doc.data())
            })

        }

        getTaks()

    }, [])


    // Função para salvar os dados
    async function handleFunctionSubmit(event: FormEvent) {
        event.preventDefault()

        try {

            const docRef = await addDoc(collection(db, 'userTasks'), {
                taskDescription: input,
                public: publicTask
            })

            console.log('tarefa adicinada com sucesso', docRef)

        } catch (error) {
            console.log('Erro ao adicionar documento', error)
        }
    }


    function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
        setPublicTask(event.target.checked)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>
            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>

                        <form onSubmit={handleFunctionSubmit}>
                            <Textarea placeholder="Digite qual sua tarefa..."
                                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)} />
                            <div className={styles.checkboxArea}>
                                <input type="checkbox" className={styles.checkbox}
                                    checked={publicTask}
                                    onChange={handleChangePublic} />
                                <label>Deixar tarefa publica?</label>
                            </div>
                            <button className={styles.button} type="submit">
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>

                <section className={styles.taskContainer}>
                    <h1>Minhas tarefas</h1>

                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>PUBLICO</label>
                            <button className={styles.shareButton}>
                                <FiShare2 size={22} color="#3183ff" />
                            </button>
                        </div>

                        <Tasks />
                    </article>
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req }) // Aqui estou obtendo a sessão do usuário

    if (!session?.user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

