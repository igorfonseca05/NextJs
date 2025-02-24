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
import { db, addDoc, collection, getDocs, onSnapshot, doc } from '../../firebase/firebaseConnection'
import Tasks from "@/src/components/tasks/Tasks";

// inferindo tipo de dados do objeto users quer recebemos 
// da props do getServerSideProps
interface UserInfos {
    user: {
        email: string
    }
}

export default function Dashboard({ user }: UserInfos) {

    const [input, setInput] = useState("")

    // Aqui não precisamos inferir, pois "false" é um tipo boolean especifico
    // o ts é capaz de inferir tipo automaticamente
    const [publicTask, setPublicTask] = useState(false)

    // Aqui o ts não sabe que é um array de objetos, precisamos inferir
    const [tasks, setTasks] = useState<{ id: string; tarefa: string, public: boolean }[]>([])



    // Função para salvar os dados
    async function handleFunctionSubmit(event: FormEvent) {
        event.preventDefault()

        try {
            await addDoc(collection(db, 'userTasks'), {
                tarefa: input,
                public: publicTask,
                createdAt: Date.now(),
                user
            })
        } catch (error) {
            console.log('Erro ao adicionar documento', error)
        }
    }


    function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
        setPublicTask(event.target.checked)
    }

    useEffect(() => {
        onSnapshot(collection(db, 'userTasks'), (snapshot) => {

            // Aqui inferimos o tipo pq o ts não sabe que userTask é um array de objetos.
            const userTasks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as { id: string; tarefa: string, public: boolean }[]


            setTasks(userTasks)
        })
    }, [])


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
                                doc.public ? <Tasks key={doc.id} text={doc.tarefa} /> : ''
                            ))) :
                            (<p className={styles.warning}>Nenhuma tarefa adicionada</p>)
                    }
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
        props: {
            user: {
                email: session?.user?.email
            },
        },
    }

}