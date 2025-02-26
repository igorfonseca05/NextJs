import { GetServerSideProps } from 'next';
import styles from './styles.module.css'

import Head from 'next/head';

import { doc, getDoc, db, collection, addDoc, onSnapshot, query, where } from '../../firebase/firebaseConnection'

import Textarea from '../../components/Textarea/index'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { getSession, useSession } from 'next-auth/react';
import { orderBy } from 'firebase/firestore/lite';
import { getServerSession } from 'next-auth';


interface TaskProps {
    task: {
        id: string,
        tarefa: string
        createdAt: Date,
        public: string
        user: string
    }
}


type Comments = {
    idTask: string,
    comment: string,
    id: string,
    createdAt: Date,
    author: string
}

export default function Task({ task }: TaskProps) {

    const { data: session, status } = useSession()

    const [comment, setComment] = useState<string>('')
    const [comments, setComments] = useState<Comments[]>([])


    async function addComments(event: FormEvent) {
        event.preventDefault()

        if (comment == '') return
        if (!session?.user?.email) return

        const userComment = {
            comment,
            id: task?.id,
            createdAt: Date.now(),
            author: session?.user
        }

        const collectionRef = collection(db, 'UserComments')

        try {
            await addDoc(collectionRef, userComment)
            setComment('')
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {

        const collectionRef = collection(db, 'UserComments')

        const q = query(
            collectionRef,
            orderBy('createdAt', 'desc'),
            where('id', '==', task?.id)
        )

        onSnapshot(q, (snapShot) => {

            const postsComments = [] as Comments[]

            snapShot.forEach(doc => {
                postsComments.push({
                    idTask: doc.id,
                    comment: doc.data()?.comment,
                    id: doc.data()?.id,
                    createdAt: doc.data()?.createdAt,
                    author: doc.data()?.author
                })
            })
            setComments(postsComments)
        })

    }, [])



    return (
        <div className={styles.container}>
            <Head>
                <title>Detalhes tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1 >Tarefa</h1>
                <article className={styles.task}>
                    <p>{task.tarefa}</p>
                </article>
            </main>

            <section className={styles.commentsContainer}>
                <h2>Deixar comentário</h2>
                <form onSubmit={(event) => addComments(event)}>
                    <Textarea placeholder='Digite seu comentário'
                        required={true}
                        value={comment}
                        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                            setComment(event.target.value)
                        }}>
                    </Textarea>
                    <button className={styles.button}
                        disabled={!session?.user ? true : false}>Enviar comentário</button>
                </form>
            </section>

            <section className={styles.commentsContainer}>
                <h2>Todos comentários</h2>
                {comments.length === 0 && (
                    <span>Nenhum comentário foi encontrado...</span>
                )}

                {comments.map((item) => (
                    <article key={item.idTask} className={styles.comment}>
                        <p style={{ margin: '0px' }}>{item.comment}</p>
                    </article>
                ))}
            </section>
        </div>


    );
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {

    const session = await getSession({ req })

    const id = params?.id as string


    const docRef = doc(db, 'userTasks', id)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists() || !docSnap.data()?.public || !session?.user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const task = {
        id,
        tarefa: docSnap.data()?.tarefa,
        createdAt: new Date(docSnap.data()?.createdAt).toLocaleDateString(),
        public: docSnap.data()?.public,
        user: docSnap.data()?.user?.email
    }

    return {
        props: {
            task
        }
    }
}