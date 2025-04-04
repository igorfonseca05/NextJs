
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";


import styles from './styles.module.css'

// Components
import Header from '@/src/components/Header/Header'
import Head from 'next/head'
import Textarea from "@/src/components/Textarea";

// Icons
// import { FiShare2 } from 'react-icons/fi'
// import { FaTrash } from 'react-icons/fa'
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Firebase
import { db, addDoc, collection, onSnapshot, query, where, orderBy } from '../../firebase/firebaseConnection'
import Tasks from "@/src/components/tasks/Tasks";


interface UserInfos {
    user: {
        email: string
    }
}

interface Tasks {
    id: string;
    tarefa: string,
    public: boolean,
    createdAt: Date,
    user: string
}

export default function Dashboard({ user }: UserInfos) {

    const [input, setInput] = useState<string>("")
    const [publicTask, setPublicTask] = useState<boolean>(false)
    const [tasks, setTasks] = useState<Tasks[]>([])


    // Função para salvar os dados
    async function handleFunctionSubmit(event: FormEvent) {
        event.preventDefault()

        if (input === '') return

        try {
            await addDoc(collection(db, 'userTasks'), {
                tarefa: input,
                public: publicTask,
                createdAt: Date.now(),
                user
            })

            setInput('')
            setPublicTask(false)
        } catch (error) {
            console.log('Erro ao adicionar documento', error)
        }
    }


    function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
        setPublicTask(event.target.checked)
    }


    useEffect(() => {
        const usersTaskRef = collection(db, 'userTasks')
        const q = query(
            usersTaskRef,
            orderBy('createdAt', 'desc'),
            where("user", '==', user)
        )
        onSnapshot(q, (snapshot) => {

            let data = [] as Tasks[]

            snapshot.forEach(doc => {
                data.push({
                    id: doc.id,
                    tarefa: doc.data().tarefa,
                    createdAt: doc.data().createdAt,
                    public: doc.data().public,
                    user: doc.data().user
                })
            })

            setTasks(data)
        })

    }, [])




    // Executado sempre do lado do servidor
    export const getServerSideProps: GetServerSideProps = async ({ req }) => {
        const session = await getSession({ req })

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

    export default function Dashboard() {

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
                                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                                        setInput(event.target.value)
                                    }} />
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
                        {
                            tasks?.length ? (
                                tasks.map(doc => (
                                    <Tasks
                                        key={doc.id}
                                        text={doc.tarefa}
                                        publicTask={doc.public}
                                        id={doc.id} />
                                ))) :
                                (<p className={styles.warning}>Nenhuma tarefa adicionada</p>)
                        }
                    </section>
                </main>
            </div>
        )
    }
