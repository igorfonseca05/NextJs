import { GetServerSideProps } from 'next';
import styles from './styles.module.css'

import Head from 'next/head';

import { doc, getDoc, db } from '../../firebase/firebaseConnection'


interface TaskProps {
    task: {
        id: string,
        tarefa: string
        createdAt: Date,
        public: string
        user: string
    }
}

export default function Task({ task }: TaskProps) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Detalhes tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1 >Tarefa</h1>
            </main>
        </div>


    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const id = params?.id as string

    const docRef = doc(db, 'userTasks', id)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists() || !docSnap.data()?.public) {
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